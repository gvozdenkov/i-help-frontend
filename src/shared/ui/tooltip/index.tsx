import { ReactNode, useEffect, useRef, CSSProperties } from "react";
import { createPortal } from "react-dom";
import classnames from "classnames";
import styles from "./styles.module.css";

interface TooltipProps {
  extClassName?: string;
  visible?: boolean;
  children: ReactNode;
  pointerPosition?: "right" | "center";
  changeVisible?: () => void;
  elementStyles?: CSSProperties
}

export const Tooltip = ({
  extClassName,
  visible,
  children,
  pointerPosition = "right",
  changeVisible,
  elementStyles
}: TooltipProps) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  function closeWithEsc(e: KeyboardEvent) {
    if (e.key === 'Escape' && changeVisible) {
      changeVisible();
    }
  }
  function closeWithClickOutTooltip(e: MouseEvent) {
    const target = e.target as HTMLElement;
    if (changeVisible && target.classList.value.includes('bottomLayer')) {
      changeVisible();
    }
  }
  useEffect(() => {
    document.addEventListener('keydown', closeWithEsc);
    document.addEventListener('click', closeWithClickOutTooltip);
    return () => {
      document.removeEventListener('keydown', closeWithEsc);
      document.removeEventListener('click', closeWithClickOutTooltip);
    };
  }, []);

  const tooltip = <div className={styles.bottomLayer}>
    <div
      className={classnames(styles.tooltip, extClassName, {
        [styles["tooltip--visible"]]: visible,
      }, 'tooltip')}
      ref={tooltipRef}
      style={elementStyles}
    >
      <div
        className={classnames(
          styles.pointer,
          styles[`pointer--${pointerPosition}`]
        )}
      />
      {children}
    </div>
  </div>;

  return createPortal(tooltip, document.body);
};
