interface IconProps {
  size?: string;
  className?: string;
}

export function PolkadotIcon({ size, className }: IconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : "100"}
      fill="none"
      viewBox="0 0 100 22"
    >
      <path
        fill="currentColor"
        fillOpacity="0.89"
        d="M31.829 3.557c-1.157 0-2.273.145-2.728.27-.661.186-.826.476-.95 1.077l-2.625 12.148c-.041.249-.082.456-.082.663 0 .602.392.995 1.033.995.702 0 .992-.456 1.136-1.16l.744-3.462c.517.062 1.199.124 2.17.124 4.278 0 6.943-2.322 6.943-5.825 0-3.068-2.128-4.83-5.641-4.83zm-1.405 8.665c-.662 0-1.178-.02-1.654-.083l1.385-6.447a12.389 12.389 0 011.736-.145c2.273 0 3.43 1.078 3.43 2.86 0 2.28-1.653 3.815-4.898 3.815zM99.153 14.71c-.351 0-.579.207-1.013.684-.764.788-1.24 1.223-1.838 1.223-.538 0-.827-.435-.827-1.14 0-.394.083-.87.186-1.39l.765-3.606h2.294c.723 0 1.157-.415 1.157-1.161 0-.415-.268-.726-.888-.726h-2.15l.372-1.679c.04-.248.082-.476.082-.684 0-.58-.392-.995-1.033-.995-.682 0-.992.456-1.136 1.161l-.476 2.197h-.97c-.745 0-1.179.415-1.179 1.161 0 .415.29.726.91.726h.847l-.765 3.565a8.656 8.656 0 00-.186 1.7c0 1.68.868 2.902 2.728 2.902 1.074 0 2.025-.539 2.748-1.182.703-.622 1.219-1.388 1.219-1.886a.856.856 0 00-.847-.87zM51.626 4.78c0-.602-.414-.995-1.054-.995-.682 0-.992.456-1.137 1.16L46.852 16.99a2.735 2.735 0 00-.103.663c0 .602.413.995 1.033.995.703 0 1.013-.456 1.157-1.16l2.584-12.045c.04-.248.103-.456.103-.663zM88.51 8.387c-3.306 0-5.558 3.296-5.558 6.426 0 .059.002.117.003.175-.518.79-1.18 1.608-1.635 1.608-.331 0-.455-.31-.455-.788 0-.58.165-1.554.351-2.404l1.716-7.96c.04-.25.082-.457.082-.664 0-.602-.392-.995-1.033-.995-.703 0-.992.456-1.137 1.16l-.93 4.313c-.496-.519-1.22-.871-2.314-.871-2.196 0-4.404 1.696-5.265 4.296-.948 2.459-1.795 3.913-2.463 3.913-.248 0-.393-.207-.393-.56 0-1.036.579-3.565.826-4.788.083-.456.124-.643.124-.912 0-.913-1.508-1.99-3.471-1.99-2.27 0-4.326 1.442-5.357 3.585-1.531 2.714-2.936 4.665-3.632 4.665-.31 0-.413-.393-.496-.767l-.516-2.86 3.161-2.592c.29-.248.661-.601.661-1.057 0-.56-.372-.933-.93-.933-.413 0-.764.25-1.115.54l-4.752 3.938 1.59-7.422c.042-.248.104-.456.104-.663 0-.602-.413-.995-1.054-.995-.682 0-.992.456-1.136 1.16L50.903 16.99a2.745 2.745 0 00-.104.663c0 .602.414.995 1.034.995.702 0 1.012-.456 1.157-1.16l.33-1.555 1.943-1.576.475 2.405c.186.953.682 1.886 1.963 1.886 1.275 0 2.277-1.168 3.282-2.745.305 1.652 1.477 2.745 3.104 2.745 1.632 0 2.748-.974 3.471-2.28v.041c0 1.348.682 2.24 1.88 2.24 1.084 0 1.984-.656 2.788-2.05.456 1.215 1.476 2.05 2.895 2.05 1.673 0 2.872-1.016 3.636-2.426v.124c0 1.493.744 2.302 1.963 2.302 1.077 0 1.992-.627 2.773-1.648.594 1.02 1.658 1.648 3.096 1.648 3.306 0 5.559-3.296 5.559-6.447 0-2.219-1.343-3.815-3.637-3.815zM67.91 12.595c-.6 2.591-1.88 4.063-3.327 4.063-.972 0-1.509-.746-1.509-1.865 0-2.198 1.591-4.56 3.719-4.56.64 0 1.136.186 1.57.455l-.453 1.907zm11.51-1.098c-.662 3.047-2.17 5.162-3.823 5.162-.91 0-1.447-.705-1.447-1.866 0-2.218 1.53-4.519 3.575-4.519.785 0 1.385.27 1.818.622l-.124.6zm7.418 5.161c-1.198 0-1.694-.87-1.694-1.97 0-2.01 1.384-4.31 3.12-4.31 1.198 0 1.695.87 1.695 1.968 0 2.032-1.385 4.312-3.12 4.312zM42.616 8.387c-3.306 0-5.559 3.296-5.559 6.426 0 2.239 1.343 3.835 3.637 3.835 3.307 0 5.56-3.296 5.56-6.447 0-2.218-1.344-3.814-3.638-3.814zm-1.674 8.271c-1.198 0-1.694-.87-1.694-1.97 0-2.01 1.384-4.311 3.12-4.311 1.199 0 1.695.87 1.695 1.97 0 2.03-1.385 4.311-3.12 4.311z"
      ></path>
      <path
        fill="#E6007A"
        d="M11.064 4.844c2.106 0 3.813-.997 3.813-2.226 0-1.23-1.707-2.226-3.813-2.226s-3.813.997-3.813 2.226c0 1.23 1.707 2.226 3.813 2.226zM11.064 21.608c2.106 0 3.813-.997 3.813-2.226 0-1.23-1.707-2.226-3.813-2.226s-3.813.997-3.813 2.226c0 1.23 1.707 2.226 3.813 2.226zM5.75 7.922c1.052-1.83 1.046-3.811-.016-4.426-1.06-.614-2.774.37-3.827 2.2s-1.047 3.81.015 4.425c1.06.615 2.774-.37 3.827-2.2zM20.221 16.304c1.053-1.83 1.047-3.811-.014-4.426-1.062-.614-2.775.37-3.828 2.2s-1.047 3.81.015 4.425c1.06.615 2.775-.37 3.828-2.2zM5.734 18.503c1.062-.614 1.068-2.595.015-4.425-1.053-1.83-2.766-2.814-3.827-2.2-1.062.615-1.068 2.596-.015 4.426 1.053 1.83 2.766 2.814 3.827 2.2zM20.207 10.121c1.06-.614 1.067-2.596.014-4.425-1.052-1.83-2.766-2.814-3.827-2.2-1.061.615-1.068 2.596-.015 4.426 1.053 1.829 2.766 2.814 3.828 2.2z"
      ></path>
    </svg>
  );
}

// simple icons
export function AddIcon({ size, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size ? size : "24"}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 28 28"
    >
      <path
        fillRule="evenodd"
        stroke="none"
        d="M1 14c0 7.18 5.82 13 13 13s13-5.82 13-13S21.18 1 14 1 1 6.82 1 14zm12.968 5.685a1 1 0 001.005-.995l.023-4.196 4.194.023a1 1 0 00.01-2l-4.193-.023.023-4.193a1 1 0 10-2-.011l-.023 4.193-4.196-.023a1 1 0 10-.01 2l4.195.023-.023 4.196a1 1 0 00.995 1.006z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function MoreIcon({ size, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size ? size : "24"}
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 28 28"
    >
      <path
        fillRule="evenodd"
        stroke="none"
        d="M6.703 11.958a3.355 3.355 0 10-4.745 4.745 3.355 3.355 0 004.745-4.745zm9.67 0a3.355 3.355 0 10-4.745 4.744 3.355 3.355 0 004.744-4.744zm9.669 0a3.355 3.355 0 10-4.745 4.745 3.355 3.355 0 004.745-4.745z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function RightClickIcon({ size, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      height={size ? size : "24"}
      fill="currentColor"
      viewBox="0 0 14 24"
    >
      <path
        fillRule="evenodd"
        d="M.326 7.353a6.674 6.674 0 0113.348 0v9.294a6.674 6.674 0 01-13.348 0V7.353zM7 21.178a4.53 4.53 0 004.53-4.53v-5.67H2.618c-.05 0-.1-.004-.148-.01v5.68A4.53 4.53 0 007 21.177zM6.93 8.835V2.823a4.53 4.53 0 00-4.46 4.53v1.492a1.08 1.08 0 01.147-.01H6.93z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function ChevronDownIcon({ size }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : "24"}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 29 29"
    >
      <path d="M25.988 8.563l-11.01 13-10.99-13" data-nofill="true"></path>
    </svg>
  );
}

export function ArrowDownIcon({ size }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : "24"}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 28 28"
    >
      <path d="M13.991 25V2M24 15.8L13.991 26 4 15.8" data-nofill="true"></path>
    </svg>
  );
}

// token icons
export function AcalaCircle({ size, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : "24"}
      className={className}
      fill="none"
      viewBox="0 0 24 25"
    >
      <rect width="24" height="24" y="0.5" fill="#D1305D" rx="12"></rect>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M12 21.071a8.571 8.571 0 100-17.143 8.571 8.571 0 000 17.143zm.035-.804a7.767 7.767 0 100-15.534 7.767 7.767 0 000 15.534zM12 19.672a7.172 7.172 0 100-14.344 7.172 7.172 0 000 14.344zm.018-.875a6.315 6.315 0 100-12.63 6.315 6.315 0 000 12.63zM11.66 7.38l4.572 7.931.49-.85-4.081-7.08h-.98zm-4.384 7.067l3.913-6.789.008.014.008-.013 4.637 8.044h-.98l-1.172-2.032a5.587 5.587 0 00-1.687-.259 6.1 6.1 0 00-.887.063l.565-.978a6.598 6.598 0 011.377.078l-1.861-3.229-3.43 5.951-.49-.85zm2.66-.104l1.758-3.05-.49-.85-3.032 5.26h.98l.01-.016c.84-.506 1.806-.762 2.86-.762.672 0 1.317.119 1.915.337l-.657-1.138a6.548 6.548 0 00-3.344.22z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function HydraCircle({ size, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : "24"}
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <rect width="24" height="24" fill="#3F2667" rx="12"></rect>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M3.429 12l8.574-8.572 8.569 8.574-8.569 8.57L3.43 12zm13.637-2.573c-.356.399-1.133 1.4-1.133 2.573s.777 2.175 1.133 2.573C14.778 14.452 12.948 12 12.948 12s1.83-2.451 4.118-2.573zm-10.12 0C9.235 9.55 11.065 12 11.065 12s-1.83 2.452-4.119 2.573c.357-.398 1.133-1.4 1.133-2.573 0-1.172-.776-2.174-1.133-2.573zm-.362.016c-.362.407-1.12 1.4-1.12 2.557 0 1.163.764 2.158 1.124 2.563l1.854 1.855.008-.009c.742-.725 1.976-1.68 3.382-1.752-.354.395-1.135 1.398-1.135 2.573s.781 2.178 1.135 2.573l.171.18.171-.18c.354-.395 1.135-1.398 1.135-2.573s-.781-2.178-1.135-2.573c1.412.073 2.65 1.034 3.39 1.76l1.898-1.898.005-.005c.375-.431 1.082-1.395 1.082-2.514 0-1.123-.713-2.09-1.087-2.518l-1.888-1.89-.01.008c-.74.727-1.978 1.688-3.39 1.76.354-.394 1.135-1.398 1.135-2.572 0-1.175-.781-2.179-1.135-2.573l-.17-.197-.172.197c-.354.394-1.135 1.398-1.135 2.573 0 1.174.781 2.178 1.135 2.573-1.417-.074-2.659-1.042-3.4-1.77L6.585 9.444z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function MoonbeamCircle({ size, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : "24"}
      className={className}
      fill="none"
      viewBox="0 0 24 25"
    >
      <rect width="24" height="24" y="0.5" fill="#21928F" rx="12"></rect>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M8.428 10.685a5.035 5.035 0 015.042-5.042c2.757 0 5.042 2.286 5.042 5.042v.201H8.428v-.201zm-.773 1.008a.303.303 0 000 .605H19.42a.302.302 0 000-.605H7.655zm-2.722 1.715c0-.168.145-.303.269-.303h8.591c.124 0 .283.135.283.303 0 .167-.16.302-.283.302H5.202c-.124 0-.27-.135-.27-.303zm1.647-1.11a.303.303 0 100-.605.303.303 0 000 .605zm-2.118 1.11a.302.302 0 11-.605 0 .302.302 0 01.605 0zm3.091 1.109c-.148 0-.268.135-.268.302 0 .167.12.303.268.303h10.422c.148 0 .268-.136.268-.303 0-.167-.12-.302-.267-.302H7.553zm3.363 1.714c0-.167.12-.302.268-.302h8.54c.147 0 .267.135.267.302 0 .167-.12.303-.268.303h-8.54c-.147 0-.267-.136-.267-.303zm-4.404-1.11a.302.302 0 100-.604.302.302 0 000 .605zm-1.445 1.11a.303.303 0 11-.605 0 .303.303 0 01.605 0zm.773-.302a.303.303 0 000 .605h4.101a.303.303 0 000-.605h-4.1zm6.219 1.714a.303.303 0 11-.605 0 .303.303 0 01.605 0zm.778-.303a.305.305 0 00-.308.303c0 .167.138.302.308.302h5.267c.17 0 .308-.135.308-.302a.305.305 0 00-.308-.303h-5.267zm-4.005 1.715a.302.302 0 11-.605 0 .302.302 0 01.605 0zm.778-.303a.305.305 0 00-.308.303c0 .167.138.302.308.302h5.267c.17 0 .308-.135.308-.302a.305.305 0 00-.308-.303H9.61z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function PolkadotCircle({ size, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : "24"}
      className={className}
      fill="none"
      viewBox="0 0 24 25"
    >
      <rect width="24" height="24" y="0.5" fill="#E53684" rx="12"></rect>
      <mask
        id="mask0_128_1507"
        style={{ maskType: "luminance" }}
        width="17"
        height="19"
        x="3"
        y="3"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#fff" d="M19.988 3.928H3.857v17.143h16.131V3.928z"></path>
      </mask>
      <g fill="#fff" mask="url(#mask0_128_1507)">
        <path d="M11.921 7.524c1.708 0 3.093-.805 3.093-1.798s-1.385-1.798-3.093-1.798-3.093.805-3.093 1.798 1.385 1.798 3.093 1.798zM11.921 21.07c1.708 0 3.093-.805 3.093-1.798 0-.992-1.385-1.797-3.093-1.797s-3.093.804-3.093 1.797c0 .993 1.385 1.798 3.093 1.798zM7.61 10.013c.855-1.479.85-3.08-.012-3.577-.86-.497-2.25.3-3.105 1.778-.854 1.478-.849 3.08.012 3.576.861.497 2.252-.299 3.106-1.777zM19.348 16.785c.854-1.478.849-3.08-.012-3.576-.86-.496-2.25.3-3.104 1.778-.854 1.479-.849 3.08.011 3.576.86.497 2.25-.3 3.105-1.778zM7.599 18.563c.86-.497.866-2.098.012-3.577-.854-1.478-2.244-2.274-3.105-1.777-.861.496-.867 2.098-.013 3.576.855 1.479 2.245 2.274 3.106 1.777zM19.338 11.79c.86-.496.865-2.097.011-3.575-.854-1.479-2.244-2.275-3.104-1.778-.86.496-.866 2.097-.012 3.575.855 1.479 2.244 2.275 3.105 1.779z"></path>
      </g>
    </svg>
  );
}

export function EthereumCircle({ size, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : "24"}
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#627EEA"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      ></path>
      <path fill="#fff" fillOpacity="0.602" d="M12.374 2.998v6.653l5.623 2.513-5.623-9.166z"></path>
      <path fill="#fff" d="M12.374 2.998l-5.623 9.166 5.623-2.513V2.998z"></path>
      <path fill="#fff" fillOpacity="0.602" d="M12.374 16.474v4.521L18 13.21l-5.626 3.264z"></path>
      <path fill="#fff" d="M12.374 20.995v-4.52L6.751 13.21l5.623 7.785z"></path>
      <path fill="#fff" fillOpacity="0.2" d="M12.374 15.428l5.623-3.264-5.623-2.513v5.777z"></path>
      <path fill="#fff" fillOpacity="0.602" d="M6.751 12.164l5.623 3.264V9.651L6.75 12.164z"></path>
    </svg>
  );
}

export function TokenIcon({ token }: { token?: string }) {
  return (
    <>
      {token === "DOT" && <PolkadotCircle />}
      {token === "ACA" && <AcalaCircle />}
      {token === "GLMR" && <MoonbeamCircle />}
      {token === "ETH" && <EthereumCircle />}
      {token === "HYD" && <HydraCircle />}
    </>
  );
}
