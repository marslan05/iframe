"use client";
import { useState, useEffect, useRef } from "react";
const Footer = () => {
  const [emailCopiesStatus, setEmailCopiesStatus] = useState(false);

  const [isScrolledPastDiv, setIsScrolledPastDiv] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    const menuHeight = document.getElementById("parentMenu").offsetHeight;
    const mainBodyHeight = document.getElementById("parentMain").offsetHeight;

    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    if (scrollPosition >= mainBodyHeight - window.innerHeight / 2) {
      setIsScrolledPastDiv(true);
    } else {
      setIsScrolledPastDiv(false);
    }
    // window.addEventListener("scroll", () => {
    //   const scrollPosition = window.scrollY;
    //   if (parseInt(scrollPosition) >= parseInt(divPosition - 650)) {
    //     setIsScrolledPastDiv(true);
    //   } else {
    //     setIsScrolledPastDiv(false);
    //   }
    // });

    const handleScroll = () => {
      // Compare scroll position with the top position of the target div
      if (scrollY >= mainBodyHeight - window.innerHeight / 2) {
        setIsScrolledPastDiv(true);
      } else {
        setIsScrolledPastDiv(false);
      }
      // }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleEmailCopy = () => {
    navigator.clipboard
      .writeText("studio@studioparada.sk")
      .then(() => setEmailCopiesStatus(true))
      .catch((error) => console.error(error));

    setTimeout(() => {
      setEmailCopiesStatus(false);
    }, 2000);
  };

  const handleWhatsAppClick = () => {
    // Replace the following number with the actual phone number you want to chat with
    const phoneNumber = "421919215491";

    // Construct the WhatsApp chat URL
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text&type=phone_number&app_absent=0`;

    // Redirect to the WhatsApp chat URL
    window.location.href = whatsappUrl;
  };

  return (
    <>
      <div
        className="show-on-mobile  bg-[#0D0D0D] flex-col relative"
        id="myDiv"
      >
        <div className="flex flex-col py-10 justify-center gap-10 align-middle items-center w-full">
          <h3 className="text-white font-medium font-[GeneralSansMedium] text-2xl">
            Kontakt
          </h3>
          <div className="flex flex-col justify-center font-[GeneralSansMedium] gap-8 align-middle items-center w-full">
            <div className="flex flex-col justify-center gap-2 align-middle items-center w-full">
              <a
                href="tel:+421 919 215 491"
                className="h-10 font-[GeneralSansMedium] flex align-middle items-center text-white text-xl font-medium px-4 border-2 border-white"
              >
                +421 919 215 491
              </a>
              <button
                onClick={() => {
                  handleEmailCopy();
                }}
                className="h-10 flex align-middle font-[GeneralSansMedium] items-center text-white text-xl font-medium px-4 border-2 border-white"
              >
                studio@studioparada.sk
              </button>
            </div>
            <ul className="flex justify-center gap-10 align-middle items-center w-full">
              <li
                onClick={() => {
                  handleWhatsAppClick();
                }}
              >
                <svg
                  width="24"
                  height="26"
                  viewBox="0 0 24 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.39223 7.39681C8.60492 7.40552 8.84024 7.41548 9.06382 7.91246C9.21661 8.25221 9.4737 8.88559 9.67859 9.39036C9.82956 9.7623 9.95218 10.0644 9.98384 10.1277C10.0585 10.277 10.1082 10.4512 10.0087 10.6505C9.99381 10.6803 9.98003 10.7084 9.96687 10.7353C9.8921 10.8879 9.83717 11 9.71055 11.1482C9.66094 11.2061 9.60963 11.2685 9.55833 11.3309C9.45531 11.4562 9.35228 11.5816 9.26283 11.6708C9.11313 11.8196 8.95764 11.9813 9.13174 12.2798C9.30589 12.5785 9.90487 13.5554 10.7921 14.3464C11.7452 15.1962 12.5731 15.5557 12.9936 15.7382C13.0762 15.774 13.143 15.8031 13.192 15.8276C13.4905 15.9769 13.6646 15.952 13.8387 15.7525C14.0129 15.5535 14.5845 14.8815 14.7835 14.583C14.9824 14.2842 15.1814 14.334 15.455 14.4335C15.7286 14.533 17.1959 15.2551 17.4943 15.4043C17.5525 15.4334 17.6069 15.4596 17.6574 15.484C17.8657 15.5845 18.0063 15.6524 18.0664 15.7525C18.141 15.8774 18.141 16.4746 17.8923 17.1714C17.6436 17.8683 16.4251 18.5404 15.8779 18.5902C15.8252 18.5949 15.7729 18.6011 15.719 18.6074C15.2133 18.6669 14.575 18.7419 12.2966 17.8435C9.49301 16.7379 7.64445 13.9981 7.26254 13.432C7.23123 13.3856 7.20977 13.3538 7.19846 13.3387L7.19514 13.3343C7.03421 13.1192 5.97984 11.7101 5.97984 10.2521C5.97984 8.87772 6.65542 8.15728 6.96626 7.82581C6.9875 7.80315 7.00703 7.78232 7.02454 7.76322C7.29794 7.46456 7.62133 7.38983 7.82028 7.38983C7.83119 7.38983 7.8421 7.38982 7.853 7.38982C8.0409 7.3898 8.22784 7.38978 8.39223 7.39681Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.71084 18.8567C0.650603 17.0495 0.0963857 15.0013 0.0963857 12.8808C0.0963857 6.30252 5.46988 0.953125 12.0482 0.953125C15.253 0.953125 18.241 2.20614 20.506 4.4471C22.747 6.71216 24 9.70011 24 12.9049C24 19.4832 18.6265 24.8326 12.0482 24.8326C10.0482 24.8326 8.07229 24.3507 6.33735 23.3869L0 25.0495L1.71084 18.8567ZM3.63855 18.182L3.87952 18.5435L2.86747 22.2061L6.62651 21.2182L6.98795 21.4351C8.50603 22.3507 10.2651 22.8326 12.0482 22.8326C17.5181 22.8326 21.9759 18.3748 21.9759 12.9049C21.9759 10.2543 20.9398 7.74831 19.0602 5.86879C17.2048 4.01337 14.6988 2.97722 12.0482 2.97722C6.57831 2.97722 2.12048 7.41096 2.12048 12.9049C2.12048 14.7604 2.6506 16.5917 3.63855 18.182Z"
                    fill="white"
                  />
                </svg>
              </li>
              <li
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/company/studioparada/?viewAsMember=true",
                    "_blank"
                  );
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.4491 20.4495H16.8931V14.8805C16.8931 13.5525 16.8694 11.843 15.0436 11.843C13.1915 11.843 12.9081 13.2899 12.9081 14.7838V20.4492H9.35204V8.99694H12.7658V10.562H12.8136C13.5097 9.3718 14.804 8.66093 16.1819 8.71208C19.7861 8.71208 20.4506 11.0828 20.4506 14.167L20.4491 20.4495ZM5.33963 7.4315C4.19992 7.43171 3.27584 6.50794 3.27564 5.36821C3.27544 4.22848 4.19918 3.30438 5.33889 3.30417C6.4786 3.30397 7.40268 4.22774 7.40288 5.36747C7.40298 5.91478 7.18566 6.43973 6.79872 6.82681C6.41179 7.21389 5.88694 7.4314 5.33963 7.4315ZM7.11765 20.4495H3.5579V8.99694H7.11765V20.4495ZM22.222 0.00178957H1.77099C0.804431 -0.00911825 0.0117963 0.765131 0 1.7317V22.268C0.0113924 23.235 0.803963 24.01 1.77099 23.9999H22.222C23.1909 24.0119 23.9866 23.2369 24 22.268V1.73022C23.9862 0.761739 23.1904 -0.0124652 22.222 0.000152051"
                    fill="white"
                  />
                </svg>
              </li>
              <li
                onClick={() => {
                  window.open(
                    "https://www.instagram.com/studioparada/",
                    "_blank"
                  );
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.83784 12C5.83784 8.59671 8.59671 5.83784 12 5.83784C15.4033 5.83784 18.1622 8.59671 18.1622 12C18.1622 15.4033 15.4033 18.1622 12 18.1622C8.59671 18.1622 5.83784 15.4033 5.83784 12ZM12 16C9.79085 16 8 14.2092 8 12C8 9.79085 9.79085 8 12 8C14.2091 8 16 9.79085 16 12C16 14.2092 14.2091 16 12 16Z"
                    fill="white"
                  />
                  <path
                    d="M18.4056 7.03436C19.2009 7.03436 19.8456 6.38968 19.8456 5.59438C19.8456 4.79909 19.2009 4.15436 18.4056 4.15436C17.6104 4.15436 16.9656 4.79909 16.9656 5.59438C16.9656 6.38968 17.6104 7.03436 18.4056 7.03436Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 0C8.741 0 8.33234 0.0138139 7.05242 0.0722133C5.77516 0.13047 4.90283 0.333343 4.13954 0.630008C3.35044 0.936629 2.68123 1.34695 2.01406 2.01406C1.34695 2.68123 0.936629 3.35044 0.630008 4.13954C0.333343 4.90283 0.13047 5.77516 0.0722133 7.05242C0.0138139 8.33234 0 8.741 0 12C0 15.259 0.0138139 15.6677 0.0722133 16.9476C0.13047 18.2248 0.333343 19.0972 0.630008 19.8605C0.936629 20.6496 1.34695 21.3188 2.01406 21.9859C2.68123 22.6531 3.35044 23.0634 4.13954 23.37C4.90283 23.6667 5.77516 23.8695 7.05242 23.9278C8.33234 23.9862 8.741 24 12 24C15.259 24 15.6677 23.9862 16.9476 23.9278C18.2248 23.8695 19.0972 23.6667 19.8605 23.37C20.6496 23.0634 21.3188 22.6531 21.9859 21.9859C22.6531 21.3188 23.0634 20.6496 23.37 19.8605C23.6667 19.0972 23.8695 18.2248 23.9278 16.9476C23.9862 15.6677 24 15.259 24 12C24 8.741 23.9862 8.33234 23.9278 7.05242C23.8695 5.77516 23.6667 4.90283 23.37 4.13954C23.0634 3.35044 22.6531 2.68123 21.9859 2.01406C21.3188 1.34695 20.6496 0.936629 19.8605 0.630008C19.0972 0.333343 18.2248 0.13047 16.9476 0.0722133C15.6677 0.0138139 15.259 0 12 0ZM12 2.16216C15.2041 2.16216 15.5837 2.1744 16.849 2.23213C18.019 2.28548 18.6544 2.48097 19.0773 2.64531C19.6374 2.863 20.0371 3.12303 20.457 3.54297C20.877 3.96287 21.137 4.36261 21.3547 4.92274C21.519 5.34559 21.7145 5.98098 21.7679 7.15097C21.8256 8.41632 21.8378 8.79587 21.8378 12C21.8378 15.2041 21.8256 15.5837 21.7679 16.849C21.7145 18.019 21.519 18.6544 21.3547 19.0773C21.137 19.6374 20.877 20.0371 20.457 20.457C20.0371 20.877 19.6374 21.137 19.0773 21.3547C18.6544 21.519 18.019 21.7145 16.849 21.7679C15.5839 21.8256 15.2044 21.8378 12 21.8378C8.79564 21.8378 8.41618 21.8256 7.15097 21.7679C5.98098 21.7145 5.34559 21.519 4.92275 21.3547C4.36262 21.137 3.96287 20.877 3.54298 20.457C3.12308 20.0371 2.863 19.6374 2.64531 19.0773C2.48098 18.6544 2.28549 18.019 2.23214 16.849C2.1744 15.5837 2.16216 15.2041 2.16216 12C2.16216 8.79587 2.1744 8.41632 2.23214 7.15097C2.28549 5.98098 2.48098 5.34559 2.64531 4.92274C2.863 4.36261 3.12304 3.96287 3.54298 3.54297C3.96287 3.12303 4.36262 2.863 4.92275 2.64531C5.34559 2.48097 5.98098 2.28548 7.15097 2.23213C8.41632 2.1744 8.79587 2.16216 12 2.16216Z"
                    fill="white"
                  />
                </svg>
              </li>
            </ul>
          </div>
          {/* <ul className="flex align-middle gap-3.5">
            <li className="text-base font-[GeneralSansMedium] font-medium text-white ">SK</li>
            <li
              className="text-base font-[GeneralSansMedium] font-medium text-white "
              style={{ opacity: ".32" }}
            >
              EN
            </li>
            <li
              className="text-base font-[GeneralSansMedium] font-medium text-white "
              style={{ opacity: ".32" }}
            >
              DE
            </li>
          </ul> */}
        </div>
        <div className="p-6 pt-0 flex align-middle justify-between items-center">
          <span className="text-xs font-normal text-white opacity-25">
            Studio Parada s.r.o
          </span>
          <span className="text-xs font-normal text-white opacity-25">
            Bratislava & Prešov
          </span>
          <span className="text-xs font-normal text-white opacity-25">
            2023
          </span>
        </div>
      </div>
      {emailCopiesStatus && isScrolledPastDiv ? (
        <p className="text-white font-[GeneralSansMedium] text-center text-base font-medium bg-[#5E79FF] py-1 px-3 absolute bottom-0 left-0 cursor-pointer w-full">
          e-mailová adresa bola skopírovaná
        </p>
      ) : null}
      <div
        id="div"
        className={`show-on-mobile fixed bottom-0 left-0 w-full min-w-screen flex-col z-[10000] ${
          isScrolledPastDiv ? "hidden" : ""
        } `}
      >
        {emailCopiesStatus ? (
          <p className="text-white font-[GeneralSansMedium] text-center text-base font-medium bg-[#5E79FF] py-1 px-3 cursor-pointer w-full">
            e-mailová adresa bola skopírovaná
          </p>
        ) : null}
        <div className="py-4 flex align-middle justify-between items-center bg-[#0D0D0D] w-full px-6">
          <button
            onClick={() => {
              handleEmailCopy();
            }}
            className="h-9 flex align-middle items-center font-[GeneralSansMedium] text-white text-base font-medium px-4 border-2 border-white"
          >
            studio@studioparada.sk
          </button>
          <span
            onClick={() => {
              handleWhatsAppClick();
            }}
            className="h-12 w-12 rounded-full min-h-12 min-w-12 border-2 border-white flex align-middle justify-center items-center"
          >
            <svg
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.59482 5.26454C5.73662 5.27034 5.89349 5.27699 6.04255 5.60831C6.14441 5.8348 6.3158 6.25706 6.45239 6.59357C6.55304 6.84154 6.63479 7.04294 6.65589 7.08515C6.70564 7.18465 6.73878 7.30083 6.67246 7.43369C6.66254 7.45355 6.65335 7.47229 6.64458 7.4902C6.59473 7.59193 6.55811 7.66668 6.4737 7.76547C6.44062 7.80409 6.40642 7.84569 6.37222 7.8873C6.30354 7.97083 6.23486 8.05438 6.17522 8.11389C6.07542 8.21308 5.97176 8.32086 6.08783 8.51985C6.20393 8.71903 6.60324 9.37029 7.19472 9.89762C7.83011 10.4641 8.38209 10.7038 8.66239 10.8255C8.71745 10.8494 8.76202 10.8687 8.79469 10.8851C8.99368 10.9846 9.10974 10.968 9.22581 10.835C9.34191 10.7024 9.72298 10.2543 9.85565 10.0553C9.98828 9.85616 10.121 9.88933 10.3033 9.95565C10.4858 10.022 11.4639 10.5034 11.6629 10.6029C11.7017 10.6223 11.738 10.6398 11.7716 10.656C11.9104 10.723 12.0042 10.7683 12.0443 10.835C12.094 10.9183 12.094 11.3164 11.9282 11.781C11.7624 12.2456 10.9501 12.6936 10.5853 12.7268C10.5501 12.73 10.5152 12.7341 10.4793 12.7383C10.1422 12.7779 9.71669 12.828 8.19772 12.229C6.32867 11.4919 5.0963 9.66537 4.8417 9.28802C4.82082 9.25707 4.80651 9.23587 4.79897 9.22582L4.79676 9.22286C4.68948 9.07948 3.98656 8.1401 3.98656 7.16808C3.98656 6.25181 4.43695 5.77152 4.64417 5.55054C4.65833 5.53544 4.67136 5.52155 4.68302 5.50881C4.86529 5.30971 5.08089 5.25988 5.21352 5.25988C5.22079 5.25988 5.22807 5.25988 5.23533 5.25988C5.3606 5.25987 5.48523 5.25985 5.59482 5.26454Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.14056 12.9045C0.433736 11.6997 0.0642572 10.3342 0.0642572 8.92056C0.0642572 4.53502 3.64659 0.96875 8.03213 0.96875C10.1687 0.96875 12.1606 1.80409 13.6707 3.29807C15.1647 4.80811 16 6.80008 16 8.93662C16 13.3222 12.4177 16.8884 8.03213 16.8884C6.6988 16.8884 5.38153 16.5671 4.2249 15.9246L0 17.033L1.14056 12.9045ZM2.4257 12.4547L2.58634 12.6957L1.91165 15.1374L4.41767 14.4788L4.65864 14.6234C5.67068 15.2338 6.84337 15.5551 8.03213 15.5551C11.6787 15.5551 14.6506 12.5832 14.6506 8.93662C14.6506 7.16955 13.9598 5.49887 12.7068 4.24586C11.4699 3.00891 9.7992 2.31815 8.03213 2.31815C4.38554 2.31815 1.41365 5.27397 1.41365 8.93662C1.41365 10.1736 1.76707 11.3945 2.4257 12.4547Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
      </div>
    </>
  );
};
export default Footer;
