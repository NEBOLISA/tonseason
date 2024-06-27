import { Link } from "react-router-dom";
import dex from '../assets/dexscreener.svg'
import dex2 from '../assets/dexscreener2.svg'
const Header = () => {
  return (
    <div className="bg-white md:h-8 h-22 flex justify-between items-center">
      <div className="flex justify-center md:justify-between md:gap-0 overflow-hidden gap-4 items-end  md:ml-auto mx-auto w-[100%] md:w-[70%] md:mr-3 ">
        <div className="flex gap-4 items-center scroll-container ">
          <h3 className="text-[#050B15] scrolling-text text-center md:text-sm text-[12px] text-sm font-light">
            Announcing Over 300 Holders of the TONSEASON COIN
          </h3>
          <button className="font-bold md:block hidden text-sm ">
            Learn More
          </button>
        </div>
        <div className="md:flex hidden justify-center items-center gap-2">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://dexscreener.com/ton/eqanqapfwd6nmx7r5f6xpvh1m6midav8toi6p1j6ynpcfq1t"
          >
            <img className="w-5 h-5" src={dex2} alt="dex" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://t.me/tonseasongas"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9944 2C10.0166 2 8.08318 2.58649 6.43869 3.6853C4.7942 4.78412 3.51247 6.3459 2.75559 8.17317C1.99872 10.0004 1.80068 12.0111 2.18654 13.9509C2.57239 15.8907 3.5248 17.6725 4.92332 19.0711C6.32185 20.4696 8.10368 21.422 10.0435 21.8079C11.9833 22.1937 13.994 21.9957 15.8212 21.2388C17.6485 20.4819 19.2103 19.2002 20.3091 17.5557C21.4079 15.9112 21.9944 13.9778 21.9944 12C21.9945 10.6868 21.7359 9.38634 21.2334 8.17304C20.7309 6.95973 19.9943 5.8573 19.0657 4.92869C18.1371 4.00008 17.0347 3.26349 15.8214 2.76098C14.608 2.25847 13.3076 1.99989 11.9944 2ZM15.1739 17.1525C15.1365 17.2458 15.0795 17.33 15.0069 17.3996C14.9342 17.4691 14.8475 17.5223 14.7527 17.5556C14.6578 17.5889 14.5569 17.6015 14.4567 17.5926C14.3565 17.5837 14.2594 17.5535 14.1719 17.504L11.4572 15.3946L9.71491 17.002C9.67448 17.0319 9.62719 17.0511 9.57739 17.0579C9.52758 17.0647 9.47687 17.0589 9.42991 17.0409L9.76391 14.0525L9.7746 14.061L9.78143 14.002C9.78143 14.002 14.6664 9.55445 14.8654 9.36496C15.0669 9.17596 15.0004 9.13496 15.0004 9.13496C15.0119 8.90443 14.6389 9.13496 14.6389 9.13496L8.16639 13.299L5.4709 12.381C5.4709 12.381 5.0569 12.2325 5.0179 11.906C4.9769 11.582 5.48439 11.406 5.48439 11.406L16.2014 7.14849C16.2014 7.14849 17.0824 6.75597 17.0824 7.406L15.1739 17.1525Z"
                fill="#000"
              />
            </svg>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://x.com/tonseason/status/1805273440951152962?s=46"
          >
            <button>
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.9014 0H22.5816L14.5415 10.1662L24 24H16.5941L10.7935 15.6098L4.15631 24H0.473926L9.07356 13.1262L0 0H7.59394L12.8372 7.66892L18.9014 0ZM17.6098 21.5631H19.649L6.48589 2.30892H4.29759L17.6098 21.5631Z"
                  fill="#000"
                />
              </svg>
            </button>
          </a>
        </div>
        <div className="md:hidden flex  top-8 right-4 absolute  justify-center items-center gap-2">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://dexscreener.com/ton/eqanqapfwd6nmx7r5f6xpvh1m6midav8toi6p1j6ynpcfq1t"
          >
            <img className="w-5 h-5" src={dex} alt="dex" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://t.me/tonseasongas"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9944 2C10.0166 2 8.08318 2.58649 6.43869 3.6853C4.7942 4.78412 3.51247 6.3459 2.75559 8.17317C1.99872 10.0004 1.80068 12.0111 2.18654 13.9509C2.57239 15.8907 3.5248 17.6725 4.92332 19.0711C6.32185 20.4696 8.10368 21.422 10.0435 21.8079C11.9833 22.1937 13.994 21.9957 15.8212 21.2388C17.6485 20.4819 19.2103 19.2002 20.3091 17.5557C21.4079 15.9112 21.9944 13.9778 21.9944 12C21.9945 10.6868 21.7359 9.38634 21.2334 8.17304C20.7309 6.95973 19.9943 5.8573 19.0657 4.92869C18.1371 4.00008 17.0347 3.26349 15.8214 2.76098C14.608 2.25847 13.3076 1.99989 11.9944 2ZM15.1739 17.1525C15.1365 17.2458 15.0795 17.33 15.0069 17.3996C14.9342 17.4691 14.8475 17.5223 14.7527 17.5556C14.6578 17.5889 14.5569 17.6015 14.4567 17.5926C14.3565 17.5837 14.2594 17.5535 14.1719 17.504L11.4572 15.3946L9.71491 17.002C9.67448 17.0319 9.62719 17.0511 9.57739 17.0579C9.52758 17.0647 9.47687 17.0589 9.42991 17.0409L9.76391 14.0525L9.7746 14.061L9.78143 14.002C9.78143 14.002 14.6664 9.55445 14.8654 9.36496C15.0669 9.17596 15.0004 9.13496 15.0004 9.13496C15.0119 8.90443 14.6389 9.13496 14.6389 9.13496L8.16639 13.299L5.4709 12.381C5.4709 12.381 5.0569 12.2325 5.0179 11.906C4.9769 11.582 5.48439 11.406 5.48439 11.406L16.2014 7.14849C16.2014 7.14849 17.0824 6.75597 17.0824 7.406L15.1739 17.1525Z"
                fill="#fff"
              />
            </svg>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://x.com/tonseason/status/1805273440951152962?s=46"
          >
            <button>
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.9014 0H22.5816L14.5415 10.1662L24 24H16.5941L10.7935 15.6098L4.15631 24H0.473926L9.07356 13.1262L0 0H7.59394L12.8372 7.66892L18.9014 0ZM17.6098 21.5631H19.649L6.48589 2.30892H4.29759L17.6098 21.5631Z"
                  fill="#fff"
                />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Header