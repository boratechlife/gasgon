<template>
  <div>
    <section id="home-page" class="hero isolate relative">
      <div class="z-[1] inset-0 relative h-[670px]">
        <div
          style="
            background: linear-gradient(
              109deg,
              rgba(225, 0, 82, 0.5) 0%,
              rgba(255, 255, 255, 0) 49.6%
            );
          "
          class="pt-[212px] pb-[90px] pl-10 lg:pl-[194px] md:w-2/3 h-full"
        >
          <p
            class="text-3xl text-white leading-[1.16] tracking-[2.9px] font-poppins"
          >
            Radiating Hope
          </p>
          <h1
            class="mb-20 mt-5 lg:mt-10 font-poppins -tracking-[2.8px] text-white text-5xl lg:text-[56px] font-extrabold leading-[1.13] [text-shadow:0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]"
          >
            To the
            <span class="text-brand-green-2">Elderly</span> &
            <br />
            Hopeless <span class="text-brand-green-2">Children</span>
          </h1>

          <NuxtLink
            ><span
              class="[box-shadow:0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] text-4xl lg:text-[44px] text-white font-semibold leading-[1.125] -tracking-[2.15px] bg-brand-green-1 rounded-lg py-3 px-16 lg:px-20"
              >Donate</span
            ></NuxtLink
          >
        </div>
      </div>
      <img
        src="/images/hero.webp"
        class="w-full h-full object-cover absolute inset-0 z-0"
        alt=""
      />
    </section>

    <section
      class="about bg-white pt-24 px-10 lg:pl-[198px] lg:pr-[60px] pb-[150px] lg:pb-[260px] flex justify-center"
      id="about"
    >
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-28 md:gap-5 lg:gap-20 max-w-7xl w-full"
      >
        <div class="order-2 md:order-1">
          <h2
            class="text-brand-washed-red font-inter font-medium text-2xl lg:text-[28px] mb-5"
          >
            About GasGon.org
          </h2>
          <p
            class="lg:max-w-[536px] font-poppins font-light leading-[1.76] tracking-[.49px] text-sm"
          >
            Welcome to Gasgon a nonprofit organization dedicated to making
            transformational change on the lives of children, vulnerable
            individuals and the elderly. <br /><br />
            Founded in 2016n, our mission is to provide support and
            opportunities to those in need. Education is the pillar in breaking
            the cycle of poverty in the community and families at large. We in
            Gasgon empower children from disadvantaged background by helping
            them with Educational expenses .We strongly believe that every child
            deserves quality education ,we do this by ensuring we provide
            financial assistance for school fees,bags, books and uniforms making
            sure that no child is behind due to financial challenges.
            <br /><br />
            Apart from education support, we also offer computer training
            programs to vulnerable individuals especially the higher percentage
            being youths. In the current era of digital age, computer literacy
            is very important for personal and professional development in our
            computer training program, we equip individuals with vital computer
            skills to empower them to be competent, self-reliant and more
            employable. By providing this digital divide, we aim to empower
            vulnerable individual members in the community.
          </p>
        </div>
        <div class="relative h-max lg:pr-8 order-1 md:order-2">
          <img
            src="/images/woman.webp"
            class="ml-auto w-[250px] lg:w-auto"
            width="432"
            height="490"
            alt=""
          />
          <img
            src="/images/children.webp"
            class="absolute left-3.5 top-1/2 w-[200px] lg:w-auto"
            width="353"
            height="401"
            alt=""
          />
        </div>
      </div>
    </section>

    <section id="causes" class="courses bg-[#EFEFEF] pt-8 px-5 md:px-10">
      <h2
        class="uppercase text-center font-inter text-[28px] font-medium mb-10 md:mb-5"
      >
        OUR CAUSES
      </h2>
      <!-- COMPUTER TRAINING -->
      <div
        class="lg:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:gap-24 pb-5 lg:pb-[156px]"
      >
        <div>
          <div
            class="relative w-full lg:w-[484px] h-[500px] lg:h-[658px] bg-white pt-12 pr-3 lg:pr-[26px]"
          >
            <img
              src="/images/woman.webp"
              class="ml-auto w-[250px] lg:w-auto"
              width="346"
              height="392"
              alt=""
            />

            <div
              class="absolute left-0 bottom-20 lg:bottom-24 after:content-[''] after:bg-brand-green-1 after:h-full after:w-full after:absolute after:-top-2.5 after:-right-3"
            >
              <img
                src="/images/children.webp"
                class="relative z-[1] w-[200px] lg:w-auto"
                width="282"
                height="321"
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <div
            class="lg:max-w-[410px] bg-white pt-6 px-[26px] h-max pb-10 lg:pb-[160px]"
          >
            <h4
              class="text-brand-washed-red font-inter font-medium text-xl lg:text-[28px] mb-5 uppercase -tracking-[1.4px] leading-[1.12]"
            >
              COMPUTER TRAINING
            </h4>
            <p
              class="font-poppins font-light leading-[1.76] tracking-[.49px] text-sm"
            >
              Apart from education support, we also offer computer training
              programs to vulnerable individuals especially the higher
              percentage being youths. In the current era of digital age,
              computer literacy is very important for personal and professional
              development in our computer training program, we equip individuals
              with vital computer skills to empower them to be competent,
              self-reliant and more employable. By providing this digital
              divide, we aim to empower vulnerable individual members in the
              community.
            </p>
          </div>
        </div>
      </div>

      <!-- CHILD EDUCATION -->
      <div
        class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:gap-24 pb-5 lg:pb-[156px] pt-10"
      >
        <div class="flex items-end">
          <div
            class="lg:max-w-[410px] bg-white pt-6 px-[26px] h-max pb-10 lg:pb-[160px]"
          >
            <h4
              class="text-brand-washed-red font-inter font-medium text-xl lg:text-[28px] mb-5 uppercase -tracking-[1.4px] leading-[1.12]"
            >
              CHILD EDUCATION
            </h4>
            <p
              class="font-poppins font-light leading-[1.76] tracking-[.49px] text-sm"
            >
              Apart from education support, we also offer computer training
              programs to vulnerable individuals especially the higher
              percentage being youths. In the current era of digital age,
              computer literacy is very important for personal and professional
              development in our computer training program, we equip individuals
              with vital computer skills to empower them to be competent,
              self-reliant and more employable. By providing this digital
              divide, we aim to empower vulnerable individual members in the
              community.
            </p>
          </div>
        </div>
        <div>
          <div
            class="relative w-full lg:w-[484px] h-[500px] lg:h-[658px] bg-white pt-12 pr-3 lg:pr-[26px]"
          >
            <img
              src="/images/woman.webp"
              class="ml-auto w-[250px] lg:w-auto"
              width="346"
              height="392"
              alt=""
            />

            <div
              class="absolute left-0 bottom-20 lg:bottom-24 after:content-[''] after:bg-brand-green-1 after:h-full after:w-full after:absolute after:-top-2.5 after:-right-3"
            >
              <img
                src="/images/child.webp"
                class="relative z-[1] w-[200px] lg:w-auto"
                width="282"
                height="321"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <!-- ELDERLY CARE -->
      <div
        class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:gap-24 pb-5 lg:pb-[156px] pt-10"
      >
        <div>
          <div
            class="relative w-full lg:w-[484px] h-[500px] lg:h-[658px] bg-white pt-12 pr-3 lg:pr-[26px]"
          >
            <img
              src="/images/woman.webp"
              class="ml-auto w-[250px] lg:w-auto"
              width="346"
              height="392"
              alt=""
            />

            <div
              class="absolute left-0 bottom-20 lg:bottom-24 after:content-[''] after:bg-brand-green-1 after:h-full after:w-full after:absolute after:-top-2.5 after:-right-3"
            >
              <img
                src="/images/child.webp"
                class="relative z-[1] w-[200px] lg:w-auto"
                width="282"
                height="321"
                alt=""
              />
            </div>
          </div>
        </div>

        <div>
          <div
            class="lg:max-w-[410px] bg-white pt-6 px-[26px] h-max pb-10 lg:pb-[160px]"
          >
            <h4
              class="text-brand-washed-red font-inter font-medium text-xl lg:text-[28px] mb-5 uppercase -tracking-[1.4px] leading-[1.12]"
            >
              ELDERLY CARE
            </h4>
            <p
              class="font-poppins font-light leading-[1.76] tracking-[.49px] text-sm"
            >
              Apart from education support, we also offer computer training
              programs to vulnerable individuals especially the higher
              percentage being youths. In the current era of digital age,
              computer literacy is very important for personal and professional
              development in our computer training program, we equip individuals
              with vital computer skills to empower them to be competent,
              self-reliant and more employable. By providing this digital
              divide, we aim to empower vulnerable individual members in the
              community.
            </p>
          </div>
        </div>
      </div>

      <!-- BANDITRY REFUGEES -->
      <div
        class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:gap-24 pb-[156px] pt-10"
      >
        <div>
          <div
            class="lg:max-w-[410px] bg-white pt-6 px-[26px] h-max pb-10 lg:pb-[160px]"
          >
            <h4
              class="text-brand-washed-red font-inter font-medium text-x lg:text-[28px] mb-5 uppercase -tracking-[1.4px] leading-[1.12]"
            >
              BANDITRY REFUGEES
            </h4>
            <p
              class="font-poppins font-light leading-[1.76] tracking-[.49px] text-sm"
            >
              Apart from education support, we also offer computer training
              programs to vulnerable individuals especially the higher
              percentage being youths. In the current era of digital age,
              computer literacy is very important for personal and professional
              development in our computer training program, we equip individuals
              with vital computer skills to empower them to be competent,
              self-reliant and more employable. By providing this digital
              divide, we aim to empower vulnerable individual members in the
              community.
            </p>
          </div>
        </div>
        <div>
          <div
            class="relative w-full lg:w-[484px] h-[500px] lg:h-[658px] bg-white pt-12 pr-3 lg:pr-[26px]"
          >
            <img
              src="/images/pupils.webp"
              class="ml-auto w-[250px] lg:w-auto"
              width="346"
              height="392"
              alt=""
            />

            <div
              class="absolute left-0 bottom-20 lg:bottom-24 after:content-[''] after:bg-brand-green-1 after:h-full after:w-full after:absolute after:-top-2.5 after:-right-3"
            >
              <img
                src="/images/pupils-2.webp"
                class="relative z-[1] w-[200px] lg:w-auto"
                width="282"
                height="321"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <!-- CHURCH PLANTING -->
      <div
        class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:gap-24 pb-5 lg:pb-[156px] pt-10"
      >
        <div>
          <div
            class="relative w-full lg:w-[484px] h-[500px] lg:h-[658px] bg-white pt-12 pr-3 lg:pr-[26px]"
          >
            <img
              src="/images/woman.webp"
              class="ml-auto w-[250px] lg:w-auto"
              width="346"
              height="392"
              alt=""
            />

            <div
              class="absolute left-0 bottom-20 lg:bottom-24 after:content-[''] after:bg-brand-green-1 after:h-full after:w-full after:absolute after:-top-2.5 after:-right-3"
            >
              <img
                src="/mission.jpeg"
                class="relative z-[1] w-[200px] lg:w-auto"
                width="282"
                height="321"
                alt=""
              />
            </div>
          </div>
        </div>

        <div>
          <div
            class="lg:max-w-[410px] bg-white pt-6 px-[26px] h-max pb-10 lg:pb-[160px]"
          >
            <h4
              class="text-brand-washed-red font-inter font-medium text-xl lg:text-[28px] mb-5 uppercase -tracking-[1.4px] leading-[1.12]"
            >
              MISSION WORK & TRAINING
            </h4>
            <p
              class="font-poppins font-light leading-[1.76] tracking-[.49px] text-sm"
            >
              All Nations Bible & School of Missions is fulfilling the great
              commission commanded by Our Jesus Christ in Mathew 28:19-20 and
              that's our vision. Our mission is to missionaries,evangelists and
              church planters to reach the Unreached People Groups Kenya. These
              communities include: Okiek,Dorobos,
              Njemps,Somalis,Pokots,Turkana,Teso and Coastal Moslems community.
              We're located in Turbo town. We're appealing for your support and
              prayers to meet our target. Pray for us that our heavenly father
              may provide for this ministry. Pray and support us with: NIV
              Bibles for church planters,books and uniforms for pupils and
              students from poor and vulnerable families including orphans,food,
              tuition support, clothes accommodation fee, medical support and
              transport. Once again we thank you and looking forward for your
              partnerships with us in any area that God has spoken to you.
              Praise the Lord and Glory to God. Amen
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      id="team"
      class="bg-white pt-[75px] pb-[150px] lg:pb-[300px] px-12"
    >
      <h2
        class="text-center text-4xl md:text-5xl lg:text-[56px] font-inter text-black uppercase mb-16"
      >
        MEET OUR TEAM
      </h2>

      <div class="flex flex-wrap gap-[58px] justify-center">
        <div
          class="member bg-[#FCFCFC] px-3 pb-[26px] border border-brand-washed-red rounded-[9px]"
          v-for="member in team"
        >
          <img
            :src="member.photo"
            width="268"
            height="244"
            :alt="member.name"
          />
          <p
            class="mt-7 lg:mt-10 mb-3 lg:mb-5 font-poppins text-xl lg:text-[25px] font-semibold leading-[1.12] -tracking-[1.25px] text-center"
          >
            {{ member.name }}
          </p>
          <p
            class="font-poppins text-[#817A7A] text-xl lg:text-[25px] font-semibold leading-[1.12] -tracking-[1.25px] text-center"
          >
            {{ member.job }}
          </p>
        </div>
      </div>
    </section>

    <section id="contact-us" class="bg-white px-10 lg:px-[132px] pt-20 pb-8">
      <h2
        class="text-center text-4xl font-inter text-black uppercase mb-20 lg:mb-[105px]"
      >
        CONTACT US
      </h2>

      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-0 max-w-6xl mx-auto"
      >
        <div class="flex flex-col gap-20">
          <div>
            <p
              class="text-[25px] font-bold font-inter text-black uppercase leading-[1.12] -tracking-[1.25px]"
            >
              write to
            </p>
            <p
              class="text-[23px] text-[#4D4D4D] leading-[1.12] -tracking-[1.25px]"
            >
              fieldservant18@gmail.com
            </p>
          </div>
          <div>
            <p
              class="text-[25px] font-bold font-inter text-black uppercase leading-[1.12] -tracking-[1.25px]"
            >
              text/call
            </p>
            <p
              class="text-[23px] text-[#4D4D4D] leading-[1.12] -tracking-[1.25px]"
            >
              +254 724 874 506
            </p>
          </div>
          <div>
            <p
              class="text-[25px] font-bold font-inter text-black uppercase leading-[1.12] -tracking-[1.25px]"
            >
              location
            </p>
            <p
              class="text-[23px] text-[#4D4D4D] leading-[1.12] -tracking-[1.25px]"
            >
              Turbo Town
            </p>
          </div>
        </div>

        <form
          action="https://formsubmit.co/fieldservant18@gmail.com"
          method="POST"
        >
          <div class="flex flex-col gap-[84px]">
            <input
              name="name"
              class="py-5 px-8 border border-[#DADDDB] rounded-md max-w-[450px] w-full bg-white text-2xl text-[#727171] leading-[1.12] -tracking-[1.25px]"
              type="text"
              placeholder="Your name"
            />
            <input
              name="email"
              class="py-5 px-8 border border-[#DADDDB] rounded-md max-w-[450px] w-full bg-white text-2xl text-[#727171] leading-[1.12] -tracking-[1.25px]"
              type="email"
              placeholder="Your email"
            />

            <textarea
              name="message"
              rows="5"
              class="py-5 px-8 border border-[#DADDDB] rounded-md max-w-[450px] w-full bg-white text-2xl text-[#727171] leading-[1.12] -tracking-[1.25px]"
              placeholder="Send a message"
            ></textarea>
          </div>

          <button
            class="mt-8 max-w-[450px] leading-[1.12] -tracking-[1.25px] text-2xl font-inter w-full rounded-[10px] bg-brand-green-1 text-white py-5 [box-shadow:0px_4px_19px_0px_rgba(0,_0,_0,_0.25)]"
          >
            Send
          </button>
        </form>
      </div>
    </section>

    <section id="donate" class="banner relative">
      <div class="relative z-[1] px-10 lg:px-[132px]">
        <div
          class="flex flex-col lg:flex-row gap-10 lg:gap-[140px] items-center lg:max-w-6xl lg:mx-auto"
        >
          <img
            src="/logo-2.png"
            class="w-[200px] lg:w-auto mt-20 lg:mt-0"
            alt=""
          />

          <div class="lg:w-1/2 py-5 md:pb-0">
            <div
              class="flex flex-col bg-white/90 filter-[2px] rounded-[10px] pt-5 pb-[60px] max-w-[450px]"
            >
              <p
                class="font-poppins text-4xl md:text-[38px] px-5 md:pl-[50px] md:pr-5 font-extrabold leading-[1.12] -tracking-[1.95px]"
              >
                They Need Your Help
              </p>
              <p
                class="pl-10 md:pl-[67px] pr-5 md:pr-9 pb-5 text-[#7D7D7D] mt-6 text-sm md:text-base"
              >
                We humbly request your support in the form of a donation to help
                us continue our mission. Your generosity will directly impact
                the lives of those in need, allowing us to empower children,
                care for the elderly, and spread love and hope throughout our
                communities. Together, we can create a world where every child
                receives an education, every elderly person feels valued, and
                every vulnerable individual is uplifted.
              </p>

              <div class="px-5 md:px-[45px]">
                <p
                  class="font-poppins text-4xl md:text-[38px] text-center font-extrabold leading-[1.12] -tracking-[.78px]"
                >
                  DONATE VIA
                </p>

                <div class="mt-8">
                  <img
                    class="mx-auto"
                    src="/paypal.png"
                    height="67"
                    width="215"
                    alt=""
                  />
                  <span
                    class="text-center font-bold block text-[#1F264F] text-[26px]"
                    >fieldservant18@gmail.com</span
                  >
                </div>
                <div class="mt-8">
                  <div class="flex items-center justify-center">
                    <img class="w-2/5 md:w-auto" src="/mpesa.png" alt="" />
                    <img
                      class="w-2/5 md:w-auto"
                      src="/world-remit.png"
                      alt=""
                    />
                  </div>
                  <span
                    class="text-center block text-brand-washed-red font-extrabold font-poppins text-3xl md:text-[33px] leading-[1.12] -tracking-[1.65px]"
                    >+254 724 874 506</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/images/banner-bg.webp"
        class="w-full h-full object-cover bg-red-500 absolute inset-0 z-0"
        alt=""
      />
    </section>
  </div>
</template>
<script setup lang="ts">
interface Member {
  photo: string;
  name: string;
  job: string;
}

useHead({
  title: "Home",
});

const team = ref<Member[]>([
  {
    name: "REV PHILIP KOSGEI",
    photo: "/images/members/kosgei_philip.webp",
    job: "DIRECTOR",
  },
  {
    name: "SALLY LEBENE",
    photo: "/images/members/lebene_sally.webp",
    job: "COORDINATOR",
  },
  {
    name: "ABRAHAM YEGO",
    photo: "/images/members/yego_abraham.webp",
    job: "SECRETARY",
  },
  {
    name: "SAMUEL SUGUT",
    photo: "/images/members/sugut_samuel.webp",
    job: "TREASURER",
  },
]);
</script>
