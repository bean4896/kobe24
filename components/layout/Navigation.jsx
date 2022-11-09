import Toggle from "./toggle";
import { useEffect } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  function logOutHandler(e) {
    e.preventDefault();
    signOut();
  }

  // const logOutHandler = useEffect(() => {
  //   if (status === "authenticated") {
  //     router.push("/");
  //     signOut();
  //   }
  // }, [status]);

  return (
    <header className="bg-white dark:bg-zinc-900 border-b-[0.5px] dark:border-neutral-600 ">
      <div className="nav-container">
        <nav className="flex flex-row p-5 mx-auto items-center justify-between">
          <div>
            <Link href="/">
              <h1> Home Page</h1>
            </Link>
          </div>

          <div className="flex flex-row align-center items-center">
            <ul className="flex flex-row space-x-4">
              {/* {session && <div>{session.user.email}</div>} */}

              <Link href="/shoes">
                <button className="btn text-purple-900 bg-purple-400 dark:text-yellow-400 dark:bg-yellow-900 focus:outline-none shadow-none p-1 text-lg rounded-md outline-none ring-transparent cursor-pointer">
                  <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 290.000000 290.000000"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g
                      transform="translate(-80.000000,420.000000) scale(0.140000,-0.170000)"
                      fill="currentColor"
                      stroke="currentColor"
                    >
                      <path
                        d="M1199 2297 c-22 -15 -38 -36 -45 -62 -14 -45 -18 -135 -6 -135 4 0
18 10 32 23 112 101 175 108 278 29 26 -19 40 -27 32 -16 -91 120 -169 184
-225 184 -18 0 -47 -10 -66 -23z"
                      />
                      <path
                        d="M1273 2168 c-23 -13 -69 -44 -102 -70 -99 -75 -149 -90 -336 -98 -88
-4 -168 -10 -178 -15 -25 -11 -37 -38 -37 -82 1 -37 4 -40 100 -107 55 -39
100 -71 100 -72 0 -1 -52 -45 -115 -99 -64 -53 -122 -107 -130 -118 -11 -16
-15 -49 -15 -120 0 -96 1 -99 21 -94 12 3 94 -1 183 -8 88 -8 196 -18 239 -21
l77 -7 0 89 c0 67 5 100 20 132 22 49 13 50 127 -19 144 -88 203 -113 273
-112 111 0 162 42 162 131 0 57 -19 98 -68 147 -43 44 -64 45 -64 5 0 -43 -20
-80 -48 -87 -29 -7 -138 23 -225 62 l-58 25 22 31 c12 18 63 74 112 126 l90
94 17 -38 c21 -47 65 -73 122 -73 23 0 54 -6 68 -13 14 -7 72 -61 129 -120 57
-59 121 -115 142 -124 21 -10 39 -21 39 -25 0 -11 -150 -140 -225 -192 -38
-27 -74 -54 -80 -59 -6 -6 57 -7 175 -3 315 11 492 35 661 93 l107 36 -10 28
c-13 39 -63 79 -97 79 -19 0 -34 -9 -49 -29 -32 -44 -135 -90 -204 -93 -75 -3
-88 10 -97 96 -4 36 -12 71 -18 77 -6 6 -30 15 -54 20 -83 19 -200 132 -414
399 -145 180 -228 250 -298 250 -12 0 -41 -10 -64 -22z"
                      />
                      <path
                        d="M1323 1754 c-48 -52 -89 -102 -91 -109 -4 -17 146 -76 210 -83 47 -4
48 -4 63 31 8 20 15 50 15 67 0 38 8 38 62 -3 95 -72 127 -210 63 -277 -34
-35 -79 -50 -152 -50 -63 0 -117 23 -261 108 -57 34 -105 62 -107 62 -1 0 -8
-14 -15 -30 -11 -26 -18 -206 -8 -214 4 -5 372 -26 439 -26 53 0 62 4 144 63
83 58 216 171 223 188 2 4 -12 15 -30 25 -18 9 -83 68 -143 130 l-111 114 -49
0 c-61 0 -113 25 -141 68 l-22 32 -89 -96z"
                      />
                      <path
                        d="M620 1806 c0 -19 -11 -81 -25 -138 -14 -57 -25 -111 -25 -121 0 -13
22 1 78 51 43 38 93 79 110 92 18 13 32 27 32 30 0 7 -155 120 -164 120 -3 0
-6 -15 -6 -34z"
                      />
                      <path
                        d="M2130 1504 c6 -14 10 -44 10 -68 0 -66 16 -80 83 -73 30 3 75 14 99
25 41 19 113 80 104 89 -6 6 -256 52 -283 53 -20 0 -21 -3 -13 -26z"
                      />
                      <path
                        d="M2465 1309 c-190 -67 -487 -95 -930 -86 -165 4 -385 15 -510 27 -121
11 -275 23 -342 27 l-123 6 0 -77 c0 -106 15 -139 76 -162 46 -18 86 -19 659
-19 409 1 653 5 740 13 321 31 500 83 573 167 55 62 36 136 -34 134 -16 -1
-65 -14 -109 -30z"
                      />
                    </g>
                  </svg>
                </button>
              </Link>

              {session && (
                <Link href="/newmemory">
                  <button className="btn rounded-md text-yellow-400 bg-purple-700 dark:bg-purple-900">
                    Add Memory
                  </button>
                </Link>
              )}


              {!session && (
                <Link href="/auth">
                  <button className="btn text-purple-900 bg-purple-400 dark:text-yellow-400 dark:bg-yellow-900 focus:outline-none shadow-none p-1 text-lg rounded-md outline-none ring-transparent cursor-pointer">
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M89.981 38.4796C89.981 38.3384 89.981 38.1972 89.981 38.0559C88.4275 29.4408 84.3317 21.2493 77.6938 14.7526C71.0559 8.1147 62.8644 4.01896 54.2493 2.46541C54.108 2.46541 53.9668 2.46541 53.8256 2.46541C39.9848 0.0644588 25.1554 4.16019 14.563 14.7526C3.82937 25.4863 -0.266355 40.3156 2.27582 54.2976C2.27582 54.2976 2.27582 54.2976 2.27582 54.4389C3.82938 63.054 7.92511 71.2455 14.563 77.8834C23.3194 86.6398 34.618 90.8768 46.0578 90.8768C57.4976 90.8768 68.9374 86.4986 77.5526 77.8834C88.2862 67.1498 92.382 52.3204 89.981 38.4796ZM54.5317 5.29005C61.8758 6.84361 68.7962 10.2332 74.5867 15.7412L58.345 31.9829C51.8483 24.6389 50.436 14.1877 54.5317 5.29005ZM76.564 17.5773C82.072 23.3678 85.4616 30.2882 87.0151 37.6322C78.1175 41.8692 67.6663 40.3156 60.3223 33.819L76.564 17.5773ZM51.8483 4.86635C47.4701 14.6114 49.3062 25.91 56.6502 33.9602L46.199 44.4114L17.3877 15.7412C25.4379 8.25593 35.7479 4.44266 46.0578 4.44266C48.0351 4.44266 49.8711 4.58389 51.8483 4.86635ZM15.5517 17.5773L44.2218 46.2474L33.4881 56.981C25.5791 49.7782 14.4218 47.9422 4.818 52.0379C2.84075 40.0332 6.51279 27.181 15.5517 17.5773ZM37.4426 87.2048C30.2398 85.6512 23.3194 82.2616 17.5289 76.7536L33.4881 60.7943C39.8436 68.1384 41.3972 78.3071 37.4426 87.2048ZM5.10047 54.8626C13.8569 50.7668 24.0256 52.3204 31.3697 58.9583L15.5517 74.9175C10.0436 69.127 6.65402 62.2066 5.10047 54.8626ZM40.1261 87.6284C44.2218 77.8834 42.3858 66.7261 35.1829 58.9583L45.9166 48.2247L74.5867 76.8948C65.1242 85.7924 52.272 89.4645 40.1261 87.6284ZM76.564 74.9175L47.8938 46.2474L58.345 35.7962C63.4294 40.4569 69.926 42.8578 76.4227 42.8578C80.0948 42.8578 83.7668 42.1517 87.2976 40.5981C89.1336 52.6028 85.6028 65.3137 76.564 74.9175Z"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="3"
                      />
                    </svg>
                  </button>
                </Link>
              )}

              {/* {session && (
                <Link href="/auth">
                  <button
                    onClick={logOutHandler}
                    className="btn rounded-md text-[#ffffff] bg-purple-900 dark:text-yellow-400"
                  >
                    Logout
                  </button>
                </Link>
              )} */}

              {session && (
                <Link href="/profile">
                  <button className="btn rounded-md text-yellow-400 bg-yellow-50 dark:bg-yellow-900">
                    Profile
                  </button>
                </Link>
              )}
            </ul>
            <Toggle />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
