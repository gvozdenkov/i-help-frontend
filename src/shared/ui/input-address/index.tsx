import React, {
  useEffect,
  useRef,
  InputHTMLAttributes,
  ChangeEvent,
} from 'react';
import { useYMaps } from '@pbe/react-yandex-maps';
import { YMAPS_SUGGEST_SWITCHER } from 'config/ymaps/switches-api';
import { Input } from '../input';
import { GeoCoordinates } from 'shared/types/point-geojson.types';
import { useAppSelector } from 'app/hooks';

interface InputAddressProps extends InputHTMLAttributes<HTMLInputElement> {
  initialValue?: string;
  name: string;
  address: {
    address: string;
    coords?: GeoCoordinates;
  };
  setAddress: (address: string, coords?: GeoCoordinates) => void;
  label?: string;
  extClassName?: string;
  error?: boolean;
  errorText?: string;
  customIcon?: React.ReactNode;
  inputAttributes?: React.InputHTMLAttributes<HTMLInputElement>;
}

export const InputAddress = (props: InputAddressProps) => {
  const {
    initialValue = '',
    inputAttributes = {},
    address,
    setAddress,
    ...otherProps
  } = props;

  const suggestInputRef = useRef<HTMLInputElement>(null);
  const initPlaceholder = useAppSelector((store) => store.user.data?.address);
  // any потому что в библиотеке не написаны типы для SuggestView
  const ymaps: any = useYMaps(['SuggestView', 'geocode']);

  useEffect(() => {
    if (!ymaps) {
      return;
    }

    if (YMAPS_SUGGEST_SWITCHER) {
      const suggestView = new ymaps.SuggestView(suggestInputRef?.current, {
        results: 5,
      });

      suggestView.events.add('select', (e: any) => {
        const suggestValue = e.get('item').value;

        const geo = ymaps.geocode(suggestValue);

        // any потому что в библиотеке не написаны типы для SuggestView
        geo.then((res: any) => {
          // Выбираем первый результат геокодирования.
          const firstGeoObject = res.geoObjects.get(0);

          const coords: GeoCoordinates =
            firstGeoObject.geometry.getCoordinates();

          setAddress(suggestValue, coords);
        });
      });
    } else {
      const geo = ymaps.geocode(address.address);

      // any потому что в библиотеке не написаны типы для SuggestView
      geo.then((res: any) => {
        // Выбираем первый результат геокодирования.
        const firstGeoObject = res.geoObjects.get(0);

        const coords: GeoCoordinates = firstGeoObject.geometry.getCoordinates();
        console.log(coords);
        setAddress(address.address, coords);
      });
    }
  }, [ymaps]);

  useEffect(() => {
    if (!ymaps) {
      return;
    }
    if (!YMAPS_SUGGEST_SWITCHER) {
      const geo = ymaps.geocode(address.address);

      // any потому что в библиотеке не написаны типы для SuggestView
      geo.then((res: any) => {
        // Выбираем первый результат геокодирования.
        const firstGeoObject = res.geoObjects.get(0);

        const coords: GeoCoordinates = firstGeoObject.geometry.getCoordinates();
        console.log(coords);
        setAddress(address.address, coords);
      });
    }
  }, [address.address]);

  const inputProps = {
    ...inputAttributes,
    ...otherProps,
    onChange: (event: ChangeEvent<HTMLInputElement>) => {
      setAddress(event.target.value, []);
    },
  };

  return (
    <Input
      value={address.address}
      ref={suggestInputRef}
      type="text"
      placeholder={initPlaceholder}
      {...inputProps}
    />
  );
};
