
export function Arrow({ className, color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
      <path fill={color} d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"></path>
    </svg>
  )
}

export function Blob({ className, color }) {
  return (
    <svg width="28" height="39" viewBox="0 0 28 39" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M22.9095 3.22846C21.2998 1.88762 19.415 0.927646 17.3924 0.418575C15.3698 -0.0904961 13.2605 -0.135822 11.2184 0.285905C8.49933 0.842193 6.00467 2.20401 4.05096 4.19858C2.09725 6.19315 0.772544 8.73057 0.24492 11.4889C-0.140383 13.557 -0.0703673 15.6858 0.449973 17.7234C0.970313 19.761 1.92816 21.6572 3.25519 23.2768C4.48676 24.6844 5.19268 26.4844 5.25038 28.3643V33.6821C5.25038 35.0925 5.80355 36.4451 6.7882 37.4424C7.77286 38.4397 9.10834 39 10.5009 39H17.5015C18.894 39 20.2295 38.4397 21.2141 37.4424C22.1988 36.4451 22.752 35.0925 22.752 33.6821V28.7011C22.8107 26.6256 23.5635 24.6319 24.8872 23.0464C27.2063 20.1407 28.2996 16.4253 27.9292 12.7078C27.5589 8.99025 25.755 5.57096 22.9095 3.19301V3.22846ZM19.2516 33.6821C19.2516 34.1523 19.0673 34.6031 18.739 34.9356C18.4108 35.268 17.9657 35.4548 17.5015 35.4548H10.5009C10.0367 35.4548 9.59152 35.268 9.2633 34.9356C8.93509 34.6031 8.75069 34.1523 8.75069 33.6821V31.9095H19.2516V33.6821ZM22.1744 20.8483C20.4146 22.9624 19.3879 25.6026 19.2516 28.3643H15.7513V23.0464C15.7513 22.5763 15.5669 22.1254 15.2387 21.793C14.9105 21.4605 14.4653 21.2738 14.0012 21.2738C13.537 21.2738 13.0918 21.4605 12.7636 21.793C12.4354 22.1254 12.251 22.5763 12.251 23.0464V28.3643H8.75069C8.70452 25.6488 7.71275 23.0371 5.95044 20.9901C4.78771 19.5791 4.00582 17.887 3.68103 16.0788C3.35623 14.2706 3.49961 12.408 4.09717 10.6726C4.69474 8.93727 5.72611 7.38835 7.09071 6.17691C8.45531 4.96547 10.1066 4.13285 11.8835 3.76025C13.4106 3.44178 14.9885 3.47174 16.5028 3.84794C18.017 4.22414 19.4296 4.93714 20.6379 5.93517C21.8461 6.93321 22.8198 8.19123 23.4882 9.61791C24.1566 11.0446 24.503 12.6041 24.5021 14.1833C24.5151 16.6115 23.692 18.9684 22.1744 20.8483Z" fill={color} />
    </svg>
  )
}

export function Times({ className, color }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M13.41 12L17.71 7.71C17.8983 7.5217 18.0041 7.2663 18.0041 7C18.0041 6.7337 17.8983 6.47831 17.71 6.29C17.5217 6.1017 17.2663 5.99591 17 5.99591C16.7337 5.99591 16.4783 6.1017 16.29 6.29L12 10.59L7.71 6.29C7.5217 6.1017 7.2663 5.99591 7 5.99591C6.7337 5.99591 6.4783 6.1017 6.29 6.29C6.1017 6.47831 5.99591 6.7337 5.99591 7C5.99591 7.2663 6.1017 7.5217 6.29 7.71L10.59 12L6.29 16.29C6.19627 16.383 6.12188 16.4936 6.07111 16.6154C6.02034 16.7373 5.9942 16.868 5.9942 17C5.9942 17.132 6.02034 17.2627 6.07111 17.3846C6.12188 17.5064 6.19627 17.617 6.29 17.71C6.38296 17.8037 6.49356 17.8781 6.61542 17.9289C6.73728 17.9797 6.86799 18.0058 7 18.0058C7.13201 18.0058 7.26272 17.9797 7.38458 17.9289C7.50644 17.8781 7.61704 17.8037 7.71 17.71L12 13.41L16.29 17.71C16.383 17.8037 16.4936 17.8781 16.6154 17.9289C16.7373 17.9797 16.868 18.0058 17 18.0058C17.132 18.0058 17.2627 17.9797 17.3846 17.9289C17.5064 17.8781 17.617 17.8037 17.71 17.71C17.8037 17.617 17.8781 17.5064 17.9289 17.3846C17.9797 17.2627 18.0058 17.132 18.0058 17C18.0058 16.868 17.9797 16.7373 17.9289 16.6154C17.8781 16.4936 17.8037 16.383 17.71 16.29L13.41 12Z" fill={color} />
    </svg>

  )
}

export function FacebookIcon({ className, color }) {
  return (
    <svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M9.21361 3.33248H11.0936V0.152481C10.1834 0.0578282 9.26877 0.0110969 8.35361 0.012481C5.63361 0.012481 3.77361 1.67248 3.77361 4.71248V7.33248H0.703613V10.8925H3.77361V20.0125H7.45361V10.8925H10.5136L10.9736 7.33248H7.45361V5.06248C7.45361 4.01248 7.73361 3.33248 9.21361 3.33248Z" fill={color} />
    </svg>
  )
}

export function InstagramIcon({ className, color }) {
  return (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M15.4336 3.47245C15.1963 3.47245 14.9643 3.54283 14.7669 3.67469C14.5696 3.80655 14.4158 3.99396 14.325 4.21323C14.2341 4.4325 14.2104 4.67378 14.2567 4.90656C14.303 5.13934 14.4173 5.35316 14.5851 5.52098C14.7529 5.6888 14.9667 5.80309 15.1995 5.84939C15.4323 5.8957 15.6736 5.87193 15.8928 5.78111C16.1121 5.69028 16.2995 5.53647 16.4314 5.33914C16.5632 5.1418 16.6336 4.90979 16.6336 4.67245C16.6336 4.35419 16.5072 4.04897 16.2822 3.82392C16.0571 3.59888 15.7519 3.47245 15.4336 3.47245ZM20.0336 5.89245C20.0142 5.06275 19.8588 4.24185 19.5736 3.46245C19.3194 2.79558 18.9236 2.19173 18.4136 1.69245C17.9184 1.17988 17.3132 0.786628 16.6436 0.542451C15.8663 0.248612 15.0445 0.0896612 14.2136 0.0724511C13.1536 0.0124511 12.8136 0.0124512 10.0936 0.0124512C7.37363 0.0124512 7.03363 0.0124511 5.97363 0.0724511C5.14278 0.0896612 4.32097 0.248612 3.54363 0.542451C2.8753 0.7891 2.27056 1.18201 1.77363 1.69245C1.26105 2.18763 0.867804 2.79289 0.623628 3.46245C0.329789 4.23979 0.170838 5.0616 0.153628 5.89245C0.0936279 6.95245 0.0936279 7.29245 0.0936279 10.0125C0.0936279 12.7325 0.0936279 13.0725 0.153628 14.1325C0.170838 14.9633 0.329789 15.7851 0.623628 16.5625C0.867804 17.232 1.26105 17.8373 1.77363 18.3325C2.27056 18.8429 2.8753 19.2358 3.54363 19.4825C4.32097 19.7763 5.14278 19.9352 5.97363 19.9525C7.03363 20.0125 7.37363 20.0125 10.0936 20.0125C12.8136 20.0125 13.1536 20.0125 14.2136 19.9525C15.0445 19.9352 15.8663 19.7763 16.6436 19.4825C17.3132 19.2383 17.9184 18.845 18.4136 18.3325C18.9259 17.835 19.322 17.2306 19.5736 16.5625C19.8588 15.783 20.0142 14.9622 20.0336 14.1325C20.0336 13.0725 20.0936 12.7325 20.0936 10.0125C20.0936 7.29245 20.0936 6.95245 20.0336 5.89245ZM18.2336 14.0125C18.2263 14.6472 18.1114 15.2762 17.8936 15.8725C17.734 16.3076 17.4775 16.7009 17.1436 17.0225C16.8193 17.353 16.4269 17.6089 15.9936 17.7725C15.3973 17.9902 14.7684 18.1052 14.1336 18.1125C13.1336 18.1625 12.7636 18.1725 10.1336 18.1725C7.50363 18.1725 7.13363 18.1725 6.13363 18.1125C5.47452 18.1248 4.81822 18.0233 4.19363 17.8125C3.77941 17.6405 3.40498 17.3852 3.09363 17.0625C2.76172 16.7412 2.50847 16.3476 2.35363 15.9125C2.10948 15.3076 1.97407 14.6644 1.95363 14.0125C1.95363 13.0125 1.89363 12.6425 1.89363 10.0125C1.89363 7.38245 1.89363 7.01245 1.95363 6.01245C1.95811 5.36351 2.07658 4.7204 2.30363 4.11245C2.47968 3.69036 2.74989 3.31411 3.09363 3.01245C3.39744 2.66862 3.77292 2.39555 4.19363 2.21245C4.80318 1.99249 5.44563 1.87753 6.09363 1.87245C7.09363 1.87245 7.46363 1.81245 10.0936 1.81245C12.7236 1.81245 13.0936 1.81245 14.0936 1.87245C14.7284 1.87973 15.3573 1.9947 15.9536 2.21245C16.4081 2.3811 16.8159 2.6553 17.1436 3.01245C17.4713 3.31963 17.7274 3.69518 17.8936 4.11245C18.1159 4.72139 18.2309 5.36423 18.2336 6.01245C18.2836 7.01245 18.2936 7.38245 18.2936 10.0125C18.2936 12.6425 18.2836 13.0125 18.2336 14.0125ZM10.0936 4.88245C9.07944 4.88443 8.08859 5.18698 7.24628 5.75187C6.40398 6.31676 5.74801 7.11865 5.36126 8.0562C4.97452 8.99376 4.87435 10.0249 5.07342 11.0194C5.27249 12.0138 5.76186 12.927 6.4797 13.6434C7.19754 14.3599 8.11164 14.8475 9.10649 15.0446C10.1013 15.2417 11.1323 15.1396 12.0691 14.751C13.0059 14.3624 13.8065 13.7049 14.3698 12.8615C14.933 12.0181 15.2336 11.0266 15.2336 10.0125C15.235 9.33756 15.1028 8.66906 14.8449 8.04541C14.5869 7.42176 14.2082 6.85526 13.7305 6.3785C13.2528 5.90174 12.6856 5.52413 12.0614 5.26738C11.4373 5.01063 10.7685 4.87981 10.0936 4.88245ZM10.0936 13.3425C9.43502 13.3425 8.79119 13.1472 8.24358 12.7812C7.69596 12.4153 7.26915 11.8953 7.01711 11.2868C6.76507 10.6783 6.69912 10.0088 6.82761 9.3628C6.9561 8.71684 7.27325 8.12349 7.73896 7.65779C8.20467 7.19208 8.79802 6.87492 9.44398 6.74644C10.0899 6.61795 10.7595 6.68389 11.368 6.93593C11.9764 7.18797 12.4965 7.61479 12.8624 8.1624C13.2283 8.71002 13.4236 9.35384 13.4236 10.0125C13.4236 10.4498 13.3375 10.8828 13.1701 11.2868C13.0028 11.6908 12.7575 12.0579 12.4483 12.3671C12.1391 12.6763 11.772 12.9216 11.368 13.089C10.9639 13.2563 10.5309 13.3425 10.0936 13.3425Z" fill={color} />
    </svg>
  )
}

export function WhatsAppIcon({ className, color }) {
  return (
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M14.6936 12.025C14.4936 11.925 13.1936 11.325 12.9936 11.225C12.7936 11.125 12.5936 11.125 12.3936 11.325C12.1936 11.525 11.7936 12.125 11.5936 12.325C11.4936 12.525 11.2936 12.525 11.0936 12.425C10.3936 12.125 9.69363 11.725 9.09363 11.225C8.59363 10.725 8.09363 10.125 7.69363 9.525C7.59363 9.325 7.69363 9.125 7.79363 9.025C7.89363 8.925 7.99363 8.725 8.19363 8.625C8.29363 8.525 8.39363 8.325 8.39363 8.225C8.49363 8.125 8.49363 7.925 8.39363 7.825C8.29363 7.725 7.79363 6.525 7.59363 6.025C7.49363 5.325 7.29363 5.325 7.09363 5.325H6.59363C6.39363 5.325 6.09363 5.525 5.99363 5.625C5.39363 6.225 5.09363 6.925 5.09363 7.725C5.19363 8.625 5.49363 9.525 6.09363 10.325C7.19363 11.925 8.59363 13.225 10.2936 14.025C10.7936 14.225 11.1936 14.425 11.6936 14.525C12.1936 14.725 12.6936 14.725 13.2936 14.625C13.9936 14.525 14.5936 14.025 14.9936 13.425C15.1936 13.025 15.1936 12.625 15.0936 12.225L14.6936 12.025ZM17.1936 2.925C13.2936 -0.975 6.99363 -0.975 3.09363 2.925C-0.106372 6.125 -0.706372 11.025 1.49363 14.925L0.0936279 20.025L5.39363 18.625C6.89363 19.425 8.49363 19.825 10.0936 19.825C15.5936 19.825 19.9936 15.425 19.9936 9.925C20.0936 7.325 18.9936 4.825 17.1936 2.925ZM14.4936 16.925C13.1936 17.725 11.6936 18.225 10.0936 18.225C8.59363 18.225 7.19363 17.825 5.89363 17.125L5.59363 16.925L2.49363 17.725L3.29363 14.725L3.09363 14.425C0.693628 10.425 1.89363 5.425 5.79363 2.925C9.69363 0.425 14.6936 1.725 17.0936 5.525C19.4936 9.425 18.3936 14.525 14.4936 16.925Z" fill={color} />
    </svg>
  )
}

export function GithubIcon({ className, color }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M9.99994 0.259155C7.62541 0.259254 5.3284 1.10427 3.5199 2.643C1.7114 4.18174 0.509437 6.31378 0.129069 8.65764C-0.251299 11.0015 0.214754 13.4042 1.44384 15.4359C2.67292 17.4676 4.58482 18.9956 6.83746 19.7466C7.33746 19.8342 7.52496 19.5342 7.52496 19.2716C7.52496 19.0342 7.51245 18.2466 7.51245 17.4092C4.99994 17.8716 4.34994 16.7967 4.14994 16.2342C3.92801 15.6871 3.57621 15.2023 3.12494 14.8217C2.77494 14.6342 2.27494 14.1717 3.11243 14.1592C3.43221 14.1939 3.73892 14.3052 4.00657 14.4836C4.27421 14.662 4.4949 14.9023 4.64994 15.1841C4.78671 15.4298 4.97062 15.6461 5.19113 15.8206C5.41163 15.9951 5.66441 16.1244 5.93497 16.2011C6.20553 16.2777 6.48855 16.3002 6.76781 16.2673C7.04708 16.2343 7.31711 16.1466 7.56242 16.0091C7.60571 15.5008 7.83228 15.0254 8.19994 14.6717C5.97494 14.4217 3.64994 13.5591 3.64994 9.73419C3.63588 8.74033 4.00262 7.77876 4.67494 7.04669C4.36922 6.1829 4.40499 5.23497 4.77494 4.39669C4.77494 4.39669 5.61241 4.13418 7.52494 5.42169C9.16122 4.97166 10.8886 4.97166 12.5249 5.42169C14.4374 4.12169 15.2749 4.39669 15.2749 4.39669C15.6449 5.23496 15.6807 6.18291 15.3749 7.04669C16.0493 7.77751 16.4163 8.73992 16.3999 9.73419C16.3999 13.5717 14.0624 14.4217 11.8374 14.6717C12.0761 14.9136 12.2599 15.204 12.3764 15.5232C12.4928 15.8424 12.5392 16.1829 12.5124 16.5217C12.5124 17.8592 12.4999 18.9342 12.4999 19.2717C12.4999 19.5342 12.6874 19.8467 13.1874 19.7467C15.4361 18.9896 17.3425 17.4579 18.5663 15.4252C19.7902 13.3925 20.2518 10.991 19.8688 8.64939C19.4858 6.3078 18.2831 4.17853 16.4754 2.64167C14.6677 1.10481 12.3726 0.26039 9.99994 0.259155Z" fill={color} />
    </svg>

  )
}