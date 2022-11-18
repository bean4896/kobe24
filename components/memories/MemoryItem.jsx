import Card from "../ui/Card";
import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

function memoryItem(props) {
  // check date format
  var date1 = "2006-04-30";
  var date2 = props.date;

  var date1_s = date1.replace(/\-/g, "/");
  var date2_s = date2.replace(/\-/g, "/");

  var date1_s = date1.replace("-", "/");

  var date_retire = Date.parse(date1_s);
  var dateItem_unix = Date.parse(date2_s);

  console.log(date_retire);
  console.log(dateItem_unix);

  return (
    <Card>
      <div className="mx-auto">
        <Image
          loader={myLoader}
          className="w-auto rounded-lg relative bottom-6"
          src={props.image}
          alt={props.title}
          width={500}
          height={200}
        />
        <h3 className="text-xl font-bold">{props.title}</h3>
        <div className="items-center my-2 flex-row flex">
          <div className="flew-row flex">

            {dateItem_unix > date_retire ? (
              <div className="rounded">
                {/* number 8 */}
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
className="w-6 h-6" viewBox="0 0 444.000000 444.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,444.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M0 2220 l0 -2220 2220 0 2220 0 0 2220 0 2220 -2220 0 -2220 0 0
-2220z m1117 1390 c3 -11 7 -20 10 -20 3 0 16 9 30 20 24 19 41 20 300 20
l273 0 43 -39 c23 -22 116 -114 206 -205 l165 -165 -3 -178 -3 -177 -141 -195
c-78 -108 -177 -246 -222 -307 -44 -62 -150 -208 -236 -325 -86 -118 -170
-234 -187 -259 -17 -25 -69 -97 -116 -160 -46 -63 -82 -118 -80 -121 2 -3 117
-5 256 -5 l253 1 5 85 5 85 248 3 247 2 -2 -322 -3 -323 -735 -3 c-404 -1
-745 0 -757 3 l-23 5 0 314 0 314 140 189 c78 103 179 240 225 303 47 63 136
185 200 270 63 85 147 199 187 254 40 54 99 133 130 175 31 42 74 100 94 129
l38 53 -77 76 -76 77 -115 -3 -115 -2 -80 -81 -81 -81 0 -79 0 -78 -235 0
-235 0 0 378 c0 208 3 382 7 385 3 4 107 7 231 7 215 0 224 -1 229 -20z m2551
8 c9 -9 12 -157 12 -605 l0 -593 85 0 c47 0 85 -3 85 -7 1 -47 1 -432 1 -445
-1 -16 -12 -18 -85 -18 -72 0 -85 -3 -90 -17 -11 -35 -4 -423 8 -431 6 -4 43
-7 83 -7 40 0 76 -4 80 -10 4 -5 6 -111 3 -235 l-5 -225 -399 -3 c-286 -1
-403 1 -412 9 -11 9 -14 57 -14 230 0 120 4 220 9 223 5 3 38 6 74 7 l66 2 3
191 c2 105 2 208 0 229 l-3 37 -399 0 -398 0 -126 236 c-69 130 -126 240 -126
244 0 7 61 83 240 300 47 56 99 119 115 140 111 138 150 186 155 190 3 3 37
43 75 90 38 47 92 112 120 146 27 33 86 105 130 159 44 55 95 116 114 137 l33
38 277 0 c202 0 280 -3 289 -12z"/>
<path d="M3125 2898 c-22 -27 -45 -55 -50 -61 -10 -12 -119 -146 -250 -307
-38 -47 -73 -87 -77 -88 -5 -2 -6 -8 -2 -13 3 -5 99 -9 215 -9 160 0 209 3
210 13 2 38 -1 510 -3 512 -2 1 -21 -20 -43 -47z"/>
</g>
</svg>


              </div>
            ) : (
              <div>
                  {/* number 8 */}
                  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 className="w-6 h-6" viewBox="0 0 328.000000 328.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,328.000000) scale(0.100000,-0.100000)"
fill="#facc15" stroke="#7e22ce" strokeWidth='120'>
<path d="M1023 2697 l-203 -202 0 -305 0 -305 105 -105 c58 -58 105 -110 105
-117 0 -7 -47 -59 -105 -116 l-105 -104 0 -309 0 -310 219 -217 219 -217 289
0 288 0 220 220 220 220 0 305 0 305 -110 110 -110 110 110 110 110 110 3 302
3 301 -208 209 -207 208 -320 0 -320 0 -203 -203z m749 -239 l97 -103 1 -147
0 -147 -92 -106 -92 -105 -146 0 -145 0 -92 106 -93 105 0 144 0 145 91 99
c50 55 96 102 102 105 7 2 71 5 142 5 l130 2 97 -103z m-144 -984 l61 -7 91
-99 90 -98 0 -148 0 -147 -90 -100 c-49 -54 -97 -102 -107 -106 -10 -3 -76 -6
-146 -5 l-129 1 -25 30 c-14 17 -53 60 -86 97 -34 38 -64 74 -69 80 -4 7 -8
77 -8 155 l0 143 63 67 c35 38 76 82 92 100 24 28 34 33 89 36 33 2 73 4 87 5
14 1 54 -1 87 -4z"/>
</g>
</svg>
              
              </div>
              
            )}
                        <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="stroke-purple-700 w-6 h-6 fill-yellow-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
              />
            </svg>
          </div>

          <div className="mx-4">{props.date}</div>
        </div>
        <p className="opacity-60 dark:opacity-60">{props.description}</p>
      </div>
    </Card>
  );
}

export default memoryItem;
