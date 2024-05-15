interface Props {
  active?: boolean;
}

export const StatusIcon = ({ active }: Props) => (
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1.45858 10.8288H15.5414V6.17123H1.45858V10.8288ZM7.49408 0V2.28995H9.50592V0H7.49408ZM15.5766 1.94064L13.771 3.33402L15.1944 4.43242L17 3.03904L15.5766 1.94064ZM9.50592 17V14.71H7.49408V17H9.50592ZM17 13.961L15.1944 12.5676L13.771 13.666L15.5766 15.0594L17 13.961ZM0 3.03904L1.80562 4.43242L3.22899 3.33402L1.42337 1.94064L0 3.03904ZM1.42337 15.0594L3.22899 13.666L1.80562 12.5676L0 13.961L1.42337 15.0594Z"
      fill={active ? '#74D33A' : '#FF0000'}
    />
  </svg>
);