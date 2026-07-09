import React from "react";
import bgImage from "./assets/notes-bg.jpeg";

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <div className="min-h-screen bg-[#081A12] px-6 py-10 flex flex-col lg:flex-row items-center justify-center gap-10">

      {/* LEFT SIDE */}
      <form
        onSubmit={submitHandler}
        className="
          w-full
          lg:w-1/2
          max-w-xl
          rounded-[32px]
          border
          border-[#DCCFA530]
          shadow-[0_30px_80px_rgba(0,0,0,.45)]
          backdrop-blur-xl
          p-8
          sm:p-10
          flex-shrink-0
        "
        style={{
          backgroundImage: `
          linear-gradient(rgba(8,26,18,.78), rgba(8,26,18,.78)),
          url(${bgImage})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1
          className="text-4xl font-black tracking-tight text-[#EFE7CB] mb-10"
          style={{
            fontFamily: '"Helvetica Neue", Inter, sans-serif',
          }}
        >
          Notes
        </h1>

        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="
            mb-8
            w-full
            rounded-2xl
            bg-[#1A3B2D]/70
            border
            border-[#DCCFA530]
            text-[#EFE7CB]
            placeholder:text-[#CFC4A3]
            px-6
            py-4
            outline-none
            transition-all
            duration-300
            font-semibold

            focus:bg-[#234A37]
            focus:border-[#DCCFA5]
            focus:ring-4
            focus:ring-[#B8A66A40]
          "
          style={{
            fontFamily: '"Helvetica Neue", Inter, sans-serif',
          }}
        />

        <textarea
          placeholder="Enter Details"
          className="
            mb-8
            w-full
            h-48
            resize-none
            rounded-2xl
            bg-[#1A3B2D]/70
            border
            border-[#DCCFA530]
            text-[#EFE7CB]
            placeholder:text-[#CFC4A3]
            px-6
            py-5
            outline-none
            transition-all
            duration-300
            font-medium

            focus:bg-[#234A37]
            focus:border-[#DCCFA5]
            focus:ring-4
            focus:ring-[#B8A66A40]
          "
          style={{
            fontFamily: '"Helvetica Neue", Inter, sans-serif',
          }}
        />

        <button
          type="submit"
          className="
            wave-btn
            relative
            overflow-hidden

            w-full

            rounded-2xl

            bg-gradient-to-r
            from-[#567D5D]
            via-[#73997A]
            to-[#2C5D46]

            py-4

            text-[#F7F3E4]
            font-bold
            tracking-wide

            transition-all
            duration-300

            hover:scale-[1.02]
            hover:shadow-[0_10px_40px_rgba(184,166,106,.35)]

            active:scale-95
          "
          style={{
            fontFamily: '"Helvetica Neue", Inter, sans-serif',
          }}
        >
          Add Note
        </button>
      </form>

      {/* RIGHT SIDE */}
      <div
        className="
          w-full
          lg:w-1/2
          max-w-2xl

          rounded-[32px]

          border
          border-[#DCCFA530]

          bg-gradient-to-br
          from-[#10291F]
          via-[#0D241C]
          to-[#081A12]

          shadow-[0_30px_80px_rgba(0,0,0,.35)]

          backdrop-blur-xl

          p-8

          h-[650px]
        "
      >
        <h1
          className="text-4xl font-black tracking-tight text-[#EFE7CB] mb-8"
          style={{
            fontFamily: '"Helvetica Neue", Inter, sans-serif',
          }}
        >
          Your Notes
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 h-[520px] overflow-y-auto pr-2 custom-scrollbar">

          {[1,2,3,4,5,6,7].map((item)=>(
            <div
              key={item}
              className="
                rounded-3xl
                bg-[#17382B]
                border
                border-[#DCCFA530]

                p-5

                transition-all
                duration-300

                hover:scale-90
                hover:-translate-y-1

                hover:bg-[#214737]

                shadow-lg

                hover:shadow-[0_10px_15px_rgba(184,166,106,.25)]

                cursor-pointer

                flex
                flex-col
                justify-between

                h-44
              "
            >
              <div>
                <h2 className="text-[#EFE7CB] font-bold text-lg mb-2">
                  Sample Note
                </h2>

                <p className="text-[#CFC4A3] text-sm leading-relaxed">
                  This is how your saved notes will appear. The cards are fully
                  responsive and animated.
                </p>
              </div>

              <span className="text-xs text-[#8EA68F]">
                July 2026
              </span>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default App;