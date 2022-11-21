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

  var date_retire = Date.parse(date1_s);
  var dateItem_unix = Date.parse(date2_s);

  // console.log(date_retire);
  // console.log(dateItem_unix);

  return (
    <Card>
      <div className="mx-auto">
        <Image
          loader={myLoader}
          className="w-full rounded-lg relative bottom-6"
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
                {/* number 24 */}
                <svg
                  className="w-7 h-6"
                  viewBox="0 0 426 318"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M193.13 284V221.96H146.6V240.44H84.56L190.16 94.58V60.59L149.9 20H93.8L84.56 29.24V20H41V94.58H84.56V79.07L103.04 60.59H128.12L146.6 79.07L41 221.96V284H193.13ZM325.205 240.44V187.97H241.385L216.635 141.11L315.965 20H372.065V144.08H390.545V187.97H372.065V240.44H390.545V284H309.695V240.77L325.205 240.44ZM325.205 144.41V79.4L272.405 144.41H325.205Z"
                    fill="#FACC15"
                  />
                  <path
                    d="M193.13 284V292H201.13V284H193.13ZM193.13 221.96H201.13V213.96H193.13V221.96ZM146.6 221.96V213.96H138.6V221.96H146.6ZM146.6 240.44V248.44H154.6V240.44H146.6ZM84.56 240.44L78.08 235.749L68.8916 248.44H84.56V240.44ZM190.16 94.58L196.64 99.2714L198.16 97.1719V94.58H190.16ZM190.16 60.59H198.16V57.2954L195.84 54.9563L190.16 60.59ZM149.9 20L155.58 14.3663L153.233 12H149.9V20ZM93.8 20V12H90.4863L88.1432 14.3431L93.8 20ZM84.56 29.24H76.56V48.5537L90.2169 34.8969L84.56 29.24ZM84.56 20H92.56V12H84.56V20ZM41 20V12H33V20H41ZM41 94.58H33V102.58H41V94.58ZM84.56 94.58V102.58H92.56V94.58H84.56ZM84.56 79.07L78.9031 73.4131L76.56 75.7563V79.07H84.56ZM103.04 60.59V52.59H99.7263L97.3831 54.9331L103.04 60.59ZM128.12 60.59L133.777 54.9331L131.434 52.59H128.12V60.59ZM146.6 79.07L153.034 83.8247L157.128 78.2844L152.257 73.4131L146.6 79.07ZM41 221.96L34.5663 217.205L33 219.325V221.96H41ZM41 284H33V292H41V284ZM201.13 284V221.96H185.13V284H201.13ZM193.13 213.96H146.6V229.96H193.13V213.96ZM138.6 221.96V240.44H154.6V221.96H138.6ZM146.6 232.44H84.56V248.44H146.6V232.44ZM91.04 245.131L196.64 99.2714L183.68 89.8886L78.08 235.749L91.04 245.131ZM198.16 94.58V60.59H182.16V94.58H198.16ZM195.84 54.9563L155.58 14.3663L144.22 25.6337L184.48 66.2237L195.84 54.9563ZM149.9 12H93.8V28H149.9V12ZM88.1432 14.3431L78.9031 23.5831L90.2169 34.8969L99.4569 25.6569L88.1432 14.3431ZM92.56 29.24V20H76.56V29.24H92.56ZM84.56 12H41V28H84.56V12ZM33 20V94.58H49V20H33ZM41 102.58H84.56V86.58H41V102.58ZM92.56 94.58V79.07H76.56V94.58H92.56ZM90.2169 84.7268L108.697 66.2468L97.3831 54.9331L78.9031 73.4131L90.2169 84.7268ZM103.04 68.59H128.12V52.59H103.04V68.59ZM122.463 66.2468L140.943 84.7268L152.257 73.4131L133.777 54.9331L122.463 66.2468ZM140.166 74.3153L34.5663 217.205L47.4337 226.715L153.034 83.8247L140.166 74.3153ZM33 221.96V284H49V221.96H33ZM41 292H193.13V276H41V292ZM325.205 240.44L325.375 248.438L333.205 248.272V240.44H325.205ZM325.205 187.97H333.205V179.97H325.205V187.97ZM241.385 187.97L234.311 191.706L236.563 195.97H241.385V187.97ZM216.635 141.11L210.449 136.037L207.079 140.146L209.561 144.846L216.635 141.11ZM315.965 20V12H312.18L309.779 14.9268L315.965 20ZM372.065 20H380.065V12H372.065V20ZM372.065 144.08H364.065V152.08H372.065V144.08ZM390.545 144.08H398.545V136.08H390.545V144.08ZM390.545 187.97V195.97H398.545V187.97H390.545ZM372.065 187.97V179.97H364.065V187.97H372.065ZM372.065 240.44H364.065V248.44H372.065V240.44ZM390.545 240.44H398.545V232.44H390.545V240.44ZM390.545 284V292H398.545V284H390.545ZM309.695 284H301.695V292H309.695V284ZM309.695 240.77L309.525 232.772L301.695 232.938V240.77H309.695ZM325.205 144.41V152.41H333.205V144.41H325.205ZM325.205 79.4H333.205V56.8605L318.995 74.3564L325.205 79.4ZM272.405 144.41L266.195 139.366L255.601 152.41H272.405V144.41ZM333.205 240.44V187.97H317.205V240.44H333.205ZM325.205 179.97H241.385V195.97H325.205V179.97ZM248.459 184.234L223.709 137.374L209.561 144.846L234.311 191.706L248.459 184.234ZM222.82 146.183L322.15 25.0732L309.779 14.9268L210.449 136.037L222.82 146.183ZM315.965 28H372.065V12H315.965V28ZM364.065 20V144.08H380.065V20H364.065ZM372.065 152.08H390.545V136.08H372.065V152.08ZM382.545 144.08V187.97H398.545V144.08H382.545ZM390.545 179.97H372.065V195.97H390.545V179.97ZM364.065 187.97V240.44H380.065V187.97H364.065ZM372.065 248.44H390.545V232.44H372.065V248.44ZM382.545 240.44V284H398.545V240.44H382.545ZM390.545 276H309.695V292H390.545V276ZM317.695 284V240.77H301.695V284H317.695ZM309.865 248.768L325.375 248.438L325.035 232.442L309.525 232.772L309.865 248.768ZM333.205 144.41V79.4H317.205V144.41H333.205ZM318.995 74.3564L266.195 139.366L278.615 149.454L331.415 84.4436L318.995 74.3564ZM272.405 152.41H325.205V136.41H272.405V152.41Z"
                    fill="#7E22CE"
                  />
                </svg>
              </div>
            ) : (
              <div>
                {/* number 8 */}
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 231 306"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_216_6)">
                    <path
                      d="M87.53 284L41 237.47V172.13L62.78 150.35L41 128.57V63.23L84.56 20H152.87L196.43 63.56V128.57L174.32 150.68L196.1 172.46V237.47L149.57 284H87.53ZM131.09 172.13H104.69L86.87 191.6V220.31L104.69 240.44H131.09L149.24 220.31V191.6L131.09 172.13ZM131.09 60.26H104.69L86.87 79.73V108.44L104.69 128.57H131.09L149.24 108.44V79.73L131.09 60.26Z"
                      fill="#FACC15"
                    />
                    <path
                      d="M87.53 284L81.8731 289.657L84.2163 292H87.53V284ZM41 237.47H33V240.784L35.3431 243.127L41 237.47ZM41 172.13L35.3431 166.473L33 168.816V172.13H41ZM62.78 150.35L68.4369 156.007L74.0937 150.35L68.4369 144.693L62.78 150.35ZM41 128.57H33V131.884L35.3431 134.227L41 128.57ZM41 63.23L35.3647 57.5517L33 59.8984V63.23H41ZM84.56 20V12H81.2641L78.9247 14.3217L84.56 20ZM152.87 20L158.527 14.3431L156.184 12H152.87V20ZM196.43 63.56H204.43V60.2463L202.087 57.9031L196.43 63.56ZM196.43 128.57L202.087 134.227L204.43 131.884V128.57H196.43ZM174.32 150.68L168.663 145.023L163.006 150.68L168.663 156.337L174.32 150.68ZM196.1 172.46H204.1V169.146L201.757 166.803L196.1 172.46ZM196.1 237.47L201.757 243.127L204.1 240.784V237.47H196.1ZM149.57 284V292H152.884L155.227 289.657L149.57 284ZM131.09 172.13L136.942 166.675L134.569 164.13H131.09V172.13ZM104.69 172.13V164.13H101.167L98.7886 166.729L104.69 172.13ZM86.87 191.6L80.9686 186.199L78.87 188.492V191.6H86.87ZM86.87 220.31H78.87V223.342L80.8799 225.613L86.87 220.31ZM104.69 240.44L98.6999 245.743L101.088 248.44H104.69V240.44ZM131.09 240.44V248.44H134.649L137.032 245.797L131.09 240.44ZM149.24 220.31L155.182 225.667L157.24 223.384V220.31H149.24ZM149.24 191.6H157.24V188.449L155.092 186.145L149.24 191.6ZM131.09 60.26L136.942 54.805L134.569 52.26H131.09V60.26ZM104.69 60.26V52.26H101.167L98.7886 54.8587L104.69 60.26ZM86.87 79.73L80.9686 74.3287L78.87 76.6217V79.73H86.87ZM86.87 108.44H78.87V111.472L80.8799 113.743L86.87 108.44ZM104.69 128.57L98.6999 133.873L101.088 136.57H104.69V128.57ZM131.09 128.57V136.57H134.649L137.032 133.927L131.09 128.57ZM149.24 108.44L155.182 113.797L157.24 111.514V108.44H149.24ZM149.24 79.73H157.24V76.5795L155.092 74.275L149.24 79.73ZM93.1869 278.343L46.6569 231.813L35.3431 243.127L81.8731 289.657L93.1869 278.343ZM49 237.47V172.13H33V237.47H49ZM46.6569 177.787L68.4369 156.007L57.1231 144.693L35.3431 166.473L46.6569 177.787ZM68.4369 144.693L46.6569 122.913L35.3431 134.227L57.1231 156.007L68.4369 144.693ZM49 128.57V63.23H33V128.57H49ZM46.6353 68.9083L90.1953 25.6783L78.9247 14.3217L35.3647 57.5517L46.6353 68.9083ZM84.56 28H152.87V12H84.56V28ZM147.213 25.6569L190.773 69.2168L202.087 57.9031L158.527 14.3431L147.213 25.6569ZM188.43 63.56V128.57H204.43V63.56H188.43ZM190.773 122.913L168.663 145.023L179.977 156.337L202.087 134.227L190.773 122.913ZM168.663 156.337L190.443 178.117L201.757 166.803L179.977 145.023L168.663 156.337ZM188.1 172.46V237.47H204.1V172.46H188.1ZM190.443 231.813L143.913 278.343L155.227 289.657L201.757 243.127L190.443 231.813ZM149.57 276H87.53V292H149.57V276ZM131.09 164.13H104.69V180.13H131.09V164.13ZM98.7886 166.729L80.9686 186.199L92.7714 197.001L110.591 177.531L98.7886 166.729ZM78.87 191.6V220.31H94.87V191.6H78.87ZM80.8799 225.613L98.6999 245.743L110.68 235.137L92.8601 215.007L80.8799 225.613ZM104.69 248.44H131.09V232.44H104.69V248.44ZM137.032 245.797L155.182 225.667L143.298 214.953L125.148 235.083L137.032 245.797ZM157.24 220.31V191.6H141.24V220.31H157.24ZM155.092 186.145L136.942 166.675L125.238 177.585L143.388 197.055L155.092 186.145ZM131.09 52.26H104.69V68.26H131.09V52.26ZM98.7886 54.8587L80.9686 74.3287L92.7714 85.1313L110.591 65.6613L98.7886 54.8587ZM78.87 79.73V108.44H94.87V79.73H78.87ZM80.8799 113.743L98.6999 133.873L110.68 123.267L92.8601 103.137L80.8799 113.743ZM104.69 136.57H131.09V120.57H104.69V136.57ZM137.032 133.927L155.182 113.797L143.298 103.083L125.148 123.213L137.032 133.927ZM157.24 108.44V79.73H141.24V108.44H157.24ZM155.092 74.275L136.942 54.805L125.238 65.715L143.388 85.185L155.092 74.275Z"
                      fill="#7E22CE"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_216_6">
                      <rect width="231" height="306" fill="white" />
                    </clipPath>
                  </defs>
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
