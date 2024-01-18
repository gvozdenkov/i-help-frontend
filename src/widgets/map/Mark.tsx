/* eslint-disable react/display-name */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/no-this-in-sfc */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import { Placemark, useYMaps } from '@pbe/react-yandex-maps';
import './styles.css';
import usePermission from 'shared/hooks/use-permission';
import { ACTIVATED, CONFIRMED, VERIFIED } from 'shared/libs/statuses';
import { UserRole } from 'shared/types/common.types';
import { GeoCoordinates } from 'shared/types/point-geojson.types';
import { setAddress } from 'features/create-request/model';
import { useAppDispatch } from 'app/hooks';

type MarkProps = {
  id?: number;
  coordinates?: GeoCoordinates;
  isUrgentTask?: boolean;
  fullName?: string;
  phone?: string;
  avatar?: string;
  description?: string;
  count?: number;
  onClick?: () => void;
  isAuthorised?: boolean;
  title?: string;
  date?: string;
  time?: string;
  hasBalloon?: boolean;
  draggable?: boolean;
};

export const Mark = React.memo(
  ({
    id,
    coordinates,
    isUrgentTask,
    fullName,
    phone,
    avatar,
    description,
    title,
    count,
    onClick,
    isAuthorised,
    date,
    time,
    hasBalloon,
    draggable,
  }: MarkProps) => {
    const ymaps = useYMaps(['templateLayoutFactory', 'geocode']);

    const dispatch = useAppDispatch();

    const isGranted = usePermission(
      [CONFIRMED, ACTIVATED, VERIFIED],
      UserRole.VOLUNTEER
    );
    const onUncomfirmedClick = () => {
      alert(
        'Тут будет попап о том, что вы еще не можете откликаться на заявки'
      );
    };

    if (!ymaps) return null;

    const Iconlayout = ymaps.templateLayoutFactory.createClass(
      `{% if properties.isUrgentTask %} 
      <div class="mark_container">
        <svg width="53" height="53" viewBox="0 0 53 53" fill="#D60080" xmlns="http://www.w3.org/2000/svg">
          <circle cx="26.5" cy="26.5" r="26.5" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3135 18.7243C20.3135 22.1202 23.1941 24.801 26.8427 24.801C30.4914 24.801 33.3719 22.1202 33.3719 18.7243C33.3719 15.3285 30.4914 12.6475 26.8427 12.6475C23.1941 12.6475 20.3135 15.3285 20.3135 18.7243ZM21.4658 18.7243C21.4658 16.0434 23.7702 13.7198 26.8427 13.7198C29.9153 13.7198 32.4117 16.0434 32.2197 18.7243C32.2197 21.4053 29.9153 23.7286 26.8427 23.7286C23.9622 23.7286 21.4658 21.584 21.4658 18.7243Z" fill="#FBFDFF"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M26.2664 44.1036C26.4584 44.2824 26.6504 44.461 26.8425 44.461C27.2264 44.461 27.4186 44.461 27.6106 44.1036L37.7885 23.7283C39.3248 20.3325 39.1327 16.4004 37.0203 13.1832C34.908 10.1448 31.4513 8.17873 27.6106 8H26.2664C22.4257 8.17873 18.969 9.96608 16.8566 13.1832C14.7442 16.4004 14.3601 20.3325 16.0884 23.7283L26.2664 44.1036ZM26.2664 8.89365H27.8027C31.2593 9.07238 34.3318 10.8598 36.2522 13.7195C38.1725 16.5792 38.3646 20.3326 36.8284 23.371L27.0345 42.8524L17.2407 23.371C15.7044 20.3326 15.8964 16.5792 17.8168 13.7195C19.5451 10.8598 22.8098 9.07238 26.2664 8.89365Z" fill="#FBFDFF"/>
        </svg>
      </div> {% else %} 
      <div class="mark_container">
        <svg width="53" height="53" viewBox="0 0 53 53" fill="#2E3192" xmlns="http://www.w3.org/2000/svg"> 
          <circle cx="26.5" cy="26.5" r="26.5" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3135 18.7243C20.3135 22.1202 23.1941 24.801 26.8427 24.801C30.4914 24.801 33.3719 22.1202 33.3719 18.7243C33.3719 15.3285 30.4914 12.6475 26.8427 12.6475C23.1941 12.6475 20.3135 15.3285 20.3135 18.7243ZM21.4658 18.7243C21.4658 16.0434 23.7702 13.7198 26.8427 13.7198C29.9153 13.7198 32.4117 16.0434 32.2197 18.7243C32.2197 21.4053 29.9153 23.7286 26.8427 23.7286C23.9622 23.7286 21.4658 21.584 21.4658 18.7243Z" fill="#FBFDFF"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M26.2664 44.1036C26.4584 44.2824 26.6504 44.461 26.8425 44.461C27.2264 44.461 27.4186 44.461 27.6106 44.1036L37.7885 23.7283C39.3248 20.3325 39.1327 16.4004 37.0203 13.1832C34.908 10.1448 31.4513 8.17873 27.6106 8H26.2664C22.4257 8.17873 18.969 9.96608 16.8566 13.1832C14.7442 16.4004 14.3601 20.3325 16.0884 23.7283L26.2664 44.1036ZM26.2664 8.89365H27.8027C31.2593 9.07238 34.3318 10.8598 36.2522 13.7195C38.1725 16.5792 38.3646 20.3326 36.8284 23.371L27.0345 42.8524L17.2407 23.371C15.7044 20.3326 15.8964 16.5792 17.8168 13.7195C19.5451 10.8598 22.8098 9.07238 26.2664 8.89365Z" fill="#FBFDFF"/>
        </svg>
      </div> {% endif %}
      `,
      {
        build() {
          Iconlayout.superclass.build.call(this);

          // На метку добавляем кликабильную зону
          this.getData().options.set('shape', {
            type: 'Circle',
            coordinates: [28, 28],
            radius: 30,
          });
        },
      }
    );

    const Balloonlayout = ymaps.templateLayoutFactory.createClass(
      `{% if properties.isAuthorised %} 
      <div class="task_container">
        <div class="close_icon">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="#2E3192" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 14.4L9.6 8L16 1.6L14.4 0L8 6.4L1.6 0L0 1.6L6.4 8L0 14.4L1.6 16L8 9.6L14.4 16L16 14.4Z" />
          </svg>
        </div>
        <div class="task_bio">
          <img src="{{properties.avatar}}" alt={{properties.fullName}} class="task_avatar"/>
          <div>
            <p class="task_recipient_name">
              {{properties.fullName}}
            </p>
            <p class="task_recipient_phone">{{properties.phone}}</p>
          </div>
        </div>
        <div class="task_description_container">
          <p class="task_description task_description_hidden" >
            {{properties.description}}
          </p>
          <button type="button" class="task_button">Читать</button>
      </div>       <div>
      <div class="task_icon_container">
        <div class="task_box">
          <svg width="24" height="24" viewBox="0 0 24 24" fill={% if properties.isUrgentTask %} "#D60080" {% else %} "#2E3192" {% endif %} xmlns="http://www.w3.org/2000/svg">
            <path d="M20.7404 21H3.2596C3.08653 21 3 20.9127 3 20.7379V5.18447C3 5.00971 3.08653 4.92229 3.2596 4.92229H20.7404C20.9135 4.92229 21 5.00971 21 5.18447V20.7379C20.9135 20.9127 20.8269 21 20.7404 21ZM3.43269 20.4757H20.4808V5.35918H3.43269V20.4757Z" />
            <path d="M16.4135 6.75733C16.2404 6.75733 16.1539 6.66991 16.1539 6.49515V3.26218C16.1539 3.08742 16.2404 3 16.4135 3C16.5865 3 16.6731 3.08742 16.6731 3.26218V6.49515C16.6731 6.66991 16.5 6.75733 16.4135 6.75733Z" />
            <path d="M7.41347 6.75733C7.24039 6.75733 7.15384 6.66991 7.15384 6.49515V3.26218C7.15384 3.08742 7.24039 3 7.41347 3C7.58655 3 7.67307 3.08742 7.67307 3.26218V6.49515C7.67307 6.66991 7.50001 6.75733 7.41347 6.75733Z" />
            <path d="M7.58653 16.3691V16.0196C7.67307 15.9322 7.84615 15.7574 8.10577 15.5827C8.36538 15.4079 8.45193 15.2332 8.625 15.1458C8.71154 15.0584 8.88462 14.8836 9.0577 14.7089C9.23077 14.5341 9.40385 14.3594 9.49039 14.272C9.57693 14.1846 9.75 14.0099 9.83654 13.8351C9.92308 13.6603 10.0962 13.573 10.0962 13.3982C10.2692 13.0487 10.3558 12.7865 10.3558 12.5244C10.3558 12.2623 10.2692 12.0001 10.0962 11.738C9.92309 11.5632 9.66348 11.3884 9.23078 11.3884C8.88463 11.3884 8.53848 11.4758 8.3654 11.738C8.19232 12.0001 8.01922 12.2623 8.01922 12.6118H7.50001C7.50001 12.0875 7.67307 11.6506 8.01922 11.3884C8.27884 11.1263 8.71155 10.9516 9.14424 10.9516C9.66347 10.9516 10.0096 11.1263 10.2692 11.3884C10.5288 11.6506 10.7019 12.0001 10.7019 12.5244C10.7019 12.6992 10.7019 12.9612 10.5289 13.2234C10.4423 13.4855 10.3558 13.6603 10.2692 13.8351C10.1827 14.0099 10.0096 14.1846 9.74999 14.4467C9.57692 14.7088 9.40386 14.8836 9.23078 14.971C9.14425 15.0583 8.88462 15.2332 8.625 15.4953C8.36539 15.6701 8.19231 15.8448 8.19231 15.9322H10.7885V16.3691H7.58653Z" />
            <path d="M12.9519 11.3011C13.2981 11.039 13.6442 10.9516 14.1635 10.9516C14.5962 10.9516 15.0289 11.039 15.2885 11.3011C15.5481 11.5632 15.7212 11.9127 15.7212 12.2622C15.7212 12.5244 15.6346 12.7865 15.4615 13.0487C15.2885 13.3108 15.1154 13.3982 14.7692 13.4856C15.1154 13.5729 15.2885 13.7477 15.4615 14.0098C15.6346 14.2719 15.7212 14.6214 15.7212 14.971C15.7212 15.4078 15.5481 15.67 15.2885 16.0196C15.0289 16.2817 14.5962 16.4565 14.0769 16.4565C13.5577 16.4565 13.125 16.3691 12.8654 16.1069C12.5192 15.8448 12.3461 15.4953 12.3461 15.0584H12.7788C12.7788 15.3206 12.9519 15.5826 13.2115 15.7574C13.4712 15.9321 13.7308 16.0196 14.0769 16.0196C14.4231 16.0196 14.7692 15.9321 14.9423 15.7574C15.1154 15.5826 15.2019 15.3205 15.2019 14.971C15.2019 14.5341 15.0289 14.2719 14.7692 14.0972C14.5096 13.9224 14.0769 13.8351 13.5577 13.8351H13.3846V13.3982H13.5577C14.5962 13.3982 15.0288 13.0487 15.0288 12.4371C15.0288 12.1749 14.9423 11.9127 14.7692 11.738C14.5962 11.5632 14.3366 11.4758 13.9904 11.4758C13.6442 11.4758 13.3846 11.5632 13.125 11.738C12.9519 11.9127 12.7788 12.0875 12.7788 12.3496H12.2596C12.4327 11.8253 12.6058 11.5632 12.9519 11.3011Z" />
            <path d="M20.7404 7.89319H3.43269C3.25962 7.89319 3.17309 7.80587 3.17309 7.63112C3.17309 7.45636 3.25962 7.36894 3.43269 7.36894H20.7404C20.9135 7.36894 21 7.45636 21 7.63112C20.9135 7.7185 20.8269 7.89319 20.7404 7.89319Z" />
          </svg>
          <p class={% if properties.isUrgentTask %} "task_date_text_urgent" {% else %} "task_date_text" {% endif %}>{{properties.date}}</p>
        </div>
          <div class="task_box">
            <p class={% if properties.isUrgentTask %} "task_count_urgent" {% else %} "task_count" {% endif %}>{{properties.count}}</p>
              <svg width="47" height="36" viewBox="0 0 47 36" fill={% if properties.isUrgentTask %} "#D60080" {% else %} "#2E3192" {% endif %} xmlns="http://www.w3.org/2000/svg">
                <path d="M22.5 33C29.8497 33 36.0168 29.1956 37.704 21.9962C37.7102 21.9962 37.7165 21.9962 37.7228 21.9962L37.7358 21.9962C41.1954 21.9962 44 18.5281 44 14.8806C44 11.233 41.1954 7.76493 37.7358 7.76493C37.025 7.76493 36.0506 7.68529 35.4137 7.91528C32.6319 3.3266 28.0485 1 22.5 1C16.9515 1 12.3681 3.3266 9.58627 7.91528C8.94939 7.68529 7.97502 7.76493 7.2642 7.76493C3.80458 7.76493 1 11.233 1 14.8806C1 18.5281 3.80458 21.4851 7.2642 21.4851C7.27482 21.4851 7.28543 21.485 7.29604 21.485C8.98319 28.6844 15.1503 33 22.5 33Z"/>
                <path d="M33.5569 17.7272C33.5569 24.5554 28.2856 30.0908 21.7831 30.0908C15.2806 30.0908 10.0093 24.5554 10.0093 17.7272C10.0093 10.8989 15.2806 5.36353 21.7831 5.36353C28.2856 5.36353 33.5569 10.8989 33.5569 17.7272Z" stroke="white" stroke-width="0.5"/>
                <path d="M27.6403 17.1069C27.7228 17.9658 27.6331 18.8332 27.377 19.6534C27.1208 20.4736 26.704 21.2284 26.1532 21.8692C25.6024 22.5099 24.93 23.0225 24.1792 23.3738C23.4283 23.7251 22.6158 23.9074 21.7938 23.909C20.9718 23.9105 20.1586 23.7313 19.4065 23.3828C18.6545 23.0344 17.9803 22.5244 17.4273 21.8857C16.8744 21.247 16.4549 20.4938 16.196 19.6746C15.937 18.8553 15.8443 17.9882 15.9238 17.1291L16.5493 17.193C16.4782 17.9604 16.561 18.7349 16.7924 19.4667C17.0237 20.1985 17.3983 20.8713 17.8923 21.4418C18.3862 22.0123 18.9884 22.4679 19.6602 22.7791C20.332 23.0904 21.0584 23.2505 21.7926 23.2491C22.5269 23.2477 23.2527 23.0849 23.9234 22.7711C24.5941 22.4572 25.1948 21.9994 25.6867 21.427C26.1787 20.8547 26.5511 20.1804 26.7799 19.4478C27.0087 18.7151 27.0888 17.9403 27.0151 17.1731L27.6403 17.1069Z" stroke="white" stroke-width="0.5"/>
                <path d="M19.4284 14.0181C19.4284 14.7009 18.9012 15.2544 18.251 15.2544C17.6007 15.2544 17.0736 14.7009 17.0736 14.0181C17.0736 13.3352 17.6007 12.7817 18.251 12.7817C18.9012 12.7817 19.4284 13.3352 19.4284 14.0181Z" stroke="white" stroke-width="0.5"/>
                <path d="M26.4927 14.0181C26.4927 14.7009 25.9655 15.2544 25.3153 15.2544C24.665 15.2544 24.1379 14.7009 24.1379 14.0181C24.1379 13.3352 24.665 12.7817 25.3153 12.7817C25.9655 12.7817 26.4927 13.3352 26.4927 14.0181Z" stroke="white" stroke-width="0.5"/>
                <path d="M33.1975 20.1855C33.9213 20.2436 34.6482 20.1253 35.3213 19.8397C35.9943 19.5542 36.5954 19.109 37.0776 18.5392C37.5598 17.9693 37.91 17.2901 38.1008 16.5546C38.2917 15.8191 38.318 15.0472 38.1778 14.2992C38.0376 13.5513 37.7346 12.8475 37.2925 12.2428C36.8504 11.6381 36.2812 11.149 35.6293 10.8135C34.9774 10.4781 34.2605 10.3054 33.5346 10.309C32.8086 10.3127 32.0933 10.4925 31.4445 10.8344L32.6407 13.3372C32.9221 13.1889 33.2324 13.1109 33.5472 13.1094C33.8621 13.1078 34.1731 13.1827 34.4558 13.3282C34.7386 13.4737 34.9855 13.6859 35.1773 13.9481C35.369 14.2104 35.5004 14.5157 35.5612 14.8401C35.6221 15.1645 35.6106 15.4993 35.5279 15.8184C35.4451 16.1374 35.2932 16.432 35.084 16.6792C34.8749 16.9264 34.6142 17.1195 34.3222 17.2433C34.0303 17.3672 33.715 17.4185 33.401 17.3933L33.1975 20.1855Z" stroke="white" stroke-width="0.5"/>
                <path d="M10.3688 20.1855C9.64495 20.2436 8.91811 20.1253 8.24502 19.8397C7.57194 19.5542 6.97084 19.109 6.48867 18.5392C6.0065 17.9693 5.65631 17.2901 5.46546 16.5546C5.27462 15.8191 5.24827 15.0472 5.38849 14.2992C5.52871 13.5513 5.83169 12.8475 6.27378 12.2428C6.71586 11.6381 7.28508 11.149 7.93697 10.8135C8.58886 10.4781 9.30577 10.3054 10.0317 10.309C10.7577 10.3127 11.473 10.4925 12.1218 10.8344L10.9256 13.3372C10.6442 13.1889 10.3339 13.1109 10.019 13.1094C9.70416 13.1078 9.3932 13.1827 9.11044 13.3282C8.82768 13.4737 8.58078 13.6859 8.38902 13.9481C8.19727 14.2104 8.06585 14.5157 8.00503 14.8401C7.94421 15.1645 7.95564 15.4993 8.03842 15.8184C8.1212 16.1374 8.27309 16.432 8.48223 16.6792C8.69138 16.9264 8.95211 17.1195 9.24406 17.2433C9.53601 17.3672 9.85128 17.4185 10.1652 17.3933L10.3688 20.1855Z" stroke="white" stroke-width="0.5"/>
              </svg>
          </div>
      </div>
      <div class="task_box" >
        <svg width="24" height="24" viewBox="0 0 24 24" fill={% if properties.isUrgentTask %} "#D60080" {% else %} "#2E3192" {% endif %} xmlns="http://www.w3.org/2000/svg">
          <path d="M11.9993 21C6.98048 21 3 16.9328 3 12.0001C3 6.9808 7.06701 3 11.9993 3C17.0182 3 20.9986 7.06734 20.9986 12.0001C21.0852 17.0193 17.0182 21 11.9993 21ZM11.9993 3.43269C7.32661 3.43269 3.43266 7.24042 3.43266 12.0001C3.43266 16.6731 7.24008 20.5673 11.9993 20.5673C16.672 20.5673 20.566 16.7597 20.566 12.0001C20.566 7.32696 16.7586 3.43269 11.9993 3.43269Z" />
          <path d="M9.23029 14.9422C9.14375 14.9422 9.05721 14.9422 9.05721 14.8557C8.97068 14.7692 8.97068 14.5961 9.05721 14.5095L11.2205 12.4327C11.307 12.3461 11.4801 12.3461 11.5667 12.4327C11.6532 12.5192 11.6532 12.6922 11.5667 12.7788L9.40336 14.8557C9.31683 14.9422 9.31682 14.9422 9.23029 14.9422Z" />
          <path d="M11.9993 11.3941C11.8263 11.3941 11.7397 11.3076 11.7397 11.1346V5.50954C11.7397 5.33646 11.8263 5.24988 11.9993 5.24988C12.1724 5.24988 12.2589 5.33646 12.2589 5.50954V11.1346C12.2589 11.3076 12.1724 11.3941 11.9993 11.3941Z" />
          <path d="M11.9993 12.9519C11.4801 12.9519 11.0475 12.5192 11.0475 11.9999C11.0475 11.4807 11.4801 11.0479 11.9993 11.0479C12.5185 11.0479 12.9512 11.4807 12.9512 11.9999C12.9512 12.5192 12.605 12.9519 11.9993 12.9519ZM11.9993 11.4806C11.7397 11.4806 11.4802 11.7403 11.4802 11.9999C11.4802 12.2596 11.7397 12.5192 11.9993 12.5192C12.2589 12.5192 12.5185 12.2596 12.5185 11.9999C12.5185 11.7403 12.3454 11.4806 11.9993 11.4806Z" />
        </svg>
      <p class={% if properties.isUrgentTask %} "task_date_text_urgent" {% else %} "task_date_text" {% endif %}>{{properties.time}}</p>
      </div>
        </div>
       
        <div class="task_button_container">
          <button 
            type="button"
            class={% if properties.isUrgentTask %} "submit_button_urgent" {% else %} "submit_button" {% endif %}
          >
            Откликнуться
          </button>
        </div>
      </div>
      {% else %}
      <div class="task_container">
        <div class="close_icon">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="#2E3192" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 14.4L9.6 8L16 1.6L14.4 0L8 6.4L1.6 0L0 1.6L6.4 8L0 14.4L1.6 16L8 9.6L14.4 16L16 14.4Z" />
          </svg>
        </div>
        <div class="task_bio">
          <img src="{{properties.avatar}}" alt={{properties.fullName}} class="task_avatar"/>
          <div>
            <p class="task_recipient_name">
               Нужна помощь
            </p>
            <p class="task_recipient_phone">+7 (000) ***-**-**</p>
          </div>
        </div>
        <div class="task_description_container">
          <p class="task_description task_description_hidden" >
            {{properties.title}}
          </p>
          <button type="button" class="task_button"></button>
        </div>
        <div class="task_icon_box">
          <p class={% if properties.isUrgentTask %} "task_count_urgent" {% else %} "task_count" {% endif %}>{{properties.count}}</p>
          <svg width="47" height="36" viewBox="0 0 47 36" fill={% if properties.isUrgentTask %} "#D60080" {% else %} "#2E3192" {% endif %} xmlns="http://www.w3.org/2000/svg">
            <path d="M22.5 33C29.8497 33 36.0168 29.1956 37.704 21.9962C37.7102 21.9962 37.7165 21.9962 37.7228 21.9962L37.7358 21.9962C41.1954 21.9962 44 18.5281 44 14.8806C44 11.233 41.1954 7.76493 37.7358 7.76493C37.025 7.76493 36.0506 7.68529 35.4137 7.91528C32.6319 3.3266 28.0485 1 22.5 1C16.9515 1 12.3681 3.3266 9.58627 7.91528C8.94939 7.68529 7.97502 7.76493 7.2642 7.76493C3.80458 7.76493 1 11.233 1 14.8806C1 18.5281 3.80458 21.4851 7.2642 21.4851C7.27482 21.4851 7.28543 21.485 7.29604 21.485C8.98319 28.6844 15.1503 33 22.5 33Z"/>
            <path d="M33.5569 17.7272C33.5569 24.5554 28.2856 30.0908 21.7831 30.0908C15.2806 30.0908 10.0093 24.5554 10.0093 17.7272C10.0093 10.8989 15.2806 5.36353 21.7831 5.36353C28.2856 5.36353 33.5569 10.8989 33.5569 17.7272Z" stroke="white" stroke-width="0.5"/>
            <path d="M27.6403 17.1069C27.7228 17.9658 27.6331 18.8332 27.377 19.6534C27.1208 20.4736 26.704 21.2284 26.1532 21.8692C25.6024 22.5099 24.93 23.0225 24.1792 23.3738C23.4283 23.7251 22.6158 23.9074 21.7938 23.909C20.9718 23.9105 20.1586 23.7313 19.4065 23.3828C18.6545 23.0344 17.9803 22.5244 17.4273 21.8857C16.8744 21.247 16.4549 20.4938 16.196 19.6746C15.937 18.8553 15.8443 17.9882 15.9238 17.1291L16.5493 17.193C16.4782 17.9604 16.561 18.7349 16.7924 19.4667C17.0237 20.1985 17.3983 20.8713 17.8923 21.4418C18.3862 22.0123 18.9884 22.4679 19.6602 22.7791C20.332 23.0904 21.0584 23.2505 21.7926 23.2491C22.5269 23.2477 23.2527 23.0849 23.9234 22.7711C24.5941 22.4572 25.1948 21.9994 25.6867 21.427C26.1787 20.8547 26.5511 20.1804 26.7799 19.4478C27.0087 18.7151 27.0888 17.9403 27.0151 17.1731L27.6403 17.1069Z" stroke="white" stroke-width="0.5"/>
            <path d="M19.4284 14.0181C19.4284 14.7009 18.9012 15.2544 18.251 15.2544C17.6007 15.2544 17.0736 14.7009 17.0736 14.0181C17.0736 13.3352 17.6007 12.7817 18.251 12.7817C18.9012 12.7817 19.4284 13.3352 19.4284 14.0181Z" stroke="white" stroke-width="0.5"/>
            <path d="M26.4927 14.0181C26.4927 14.7009 25.9655 15.2544 25.3153 15.2544C24.665 15.2544 24.1379 14.7009 24.1379 14.0181C24.1379 13.3352 24.665 12.7817 25.3153 12.7817C25.9655 12.7817 26.4927 13.3352 26.4927 14.0181Z" stroke="white" stroke-width="0.5"/>
            <path d="M33.1975 20.1855C33.9213 20.2436 34.6482 20.1253 35.3213 19.8397C35.9943 19.5542 36.5954 19.109 37.0776 18.5392C37.5598 17.9693 37.91 17.2901 38.1008 16.5546C38.2917 15.8191 38.318 15.0472 38.1778 14.2992C38.0376 13.5513 37.7346 12.8475 37.2925 12.2428C36.8504 11.6381 36.2812 11.149 35.6293 10.8135C34.9774 10.4781 34.2605 10.3054 33.5346 10.309C32.8086 10.3127 32.0933 10.4925 31.4445 10.8344L32.6407 13.3372C32.9221 13.1889 33.2324 13.1109 33.5472 13.1094C33.8621 13.1078 34.1731 13.1827 34.4558 13.3282C34.7386 13.4737 34.9855 13.6859 35.1773 13.9481C35.369 14.2104 35.5004 14.5157 35.5612 14.8401C35.6221 15.1645 35.6106 15.4993 35.5279 15.8184C35.4451 16.1374 35.2932 16.432 35.084 16.6792C34.8749 16.9264 34.6142 17.1195 34.3222 17.2433C34.0303 17.3672 33.715 17.4185 33.401 17.3933L33.1975 20.1855Z" stroke="white" stroke-width="0.5"/>
            <path d="M10.3688 20.1855C9.64495 20.2436 8.91811 20.1253 8.24502 19.8397C7.57194 19.5542 6.97084 19.109 6.48867 18.5392C6.0065 17.9693 5.65631 17.2901 5.46546 16.5546C5.27462 15.8191 5.24827 15.0472 5.38849 14.2992C5.52871 13.5513 5.83169 12.8475 6.27378 12.2428C6.71586 11.6381 7.28508 11.149 7.93697 10.8135C8.58886 10.4781 9.30577 10.3054 10.0317 10.309C10.7577 10.3127 11.473 10.4925 12.1218 10.8344L10.9256 13.3372C10.6442 13.1889 10.3339 13.1109 10.019 13.1094C9.70416 13.1078 9.3932 13.1827 9.11044 13.3282C8.82768 13.4737 8.58078 13.6859 8.38902 13.9481C8.19727 14.2104 8.06585 14.5157 8.00503 14.8401C7.94421 15.1645 7.95564 15.4993 8.03842 15.8184C8.1212 16.1374 8.27309 16.432 8.48223 16.6792C8.69138 16.9264 8.95211 17.1195 9.24406 17.2433C9.53601 17.3672 9.85128 17.4185 10.1652 17.3933L10.3688 20.1855Z" stroke="white" stroke-width="0.5"/>
          </svg>
        </div>
        <div class="task_button_container">
          <button 
            type="button"
            class={% if properties.isUrgentTask %} "submit_button_urgent" {% else %} "submit_button" {% endif %}
          >
            Откликнуться
          </button>
        </div>
      </div> {% endif %}
      `,

      {
        build() {
          Balloonlayout.superclass.build.call(this);

          const mainContainer = this.getParentElement();
          const taskContainer = mainContainer.querySelector('.task_container');

          // Добавляем слушатель на кпонку "читать"
          const buttonRead = taskContainer.querySelector('.task_button');

          const descriptionContainer = taskContainer.querySelector(
            '.task_description_hidden'
          );
          // Изменяем видимость кнопки "читать" в зависимости от длины контента
          const hendleReadButton = () => {
            if ([...description].length < 140) {
              buttonRead.textContent = '';
            }
          };
          hendleReadButton();
          const onReadClick = () => {
            descriptionContainer.classList.toggle('task_description_hidden');
            // eslint-disable-next-line no-unused-expressions
            buttonRead.textContent === 'Читать'
              ? (buttonRead.textContent = 'Свернуть')
              : (buttonRead.textContent = 'Читать');
          };
          buttonRead.addEventListener('click', onReadClick);

          // Добавляем слушатель на кпонку "Закрыть окно".
          const buttonClose = taskContainer.querySelector('.close_icon');
          const onCloseClick = () => {
            this.getData().map.balloon.close();
          };
          buttonClose.addEventListener('click', onCloseClick);

          // Добавляем слушатель на кпонку "Отклинуться". Колбэк берем из пропсов
          const button = taskContainer
            .querySelector('.task_button_container')
            .querySelector('button');
          button.addEventListener(
            'click',
            isGranted ? onClick : onUncomfirmedClick
          );
        },
      }
    );

    return (
      <Placemark
        geometry={coordinates}
        options={{
          iconLayout: Iconlayout,
          balloonLayout: Balloonlayout,
          hideIconOnBalloonOpen: false,
          balloonOffset: [-158, 66],
          balloonPanelMaxMapArea: 0,
          hasBalloon: hasBalloon,
          draggable: draggable,
        }}
        properties={{
          isUrgentTask,
          fullName,
          phone,
          avatar,
          description,
          count,
          title,
          isAuthorised,
          date,
          time,
        }}
        // Данный пропс отвечает за возможность получить координату в конце перетаскивания баллуна
        onDragEnd={(event) => {
          const newCoordinates = event.get('target').geometry.getCoordinates();
          // С помощью геокодера конвертируем полученную координату в адрес и отправляем в стор createRequst
          if (ymaps) {
            const geo = ymaps.geocode(newCoordinates);
            geo.then((res) => {
              const firstGeoObject = res.geoObjects.get(0);

              dispatch(
                setAddress({
                  additinalAddress: firstGeoObject.getAddressLine(),
                  coords: newCoordinates,
                })
              );
            });
          }
        }}
      />
    );
  }
);
