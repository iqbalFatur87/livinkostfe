<template>
    <div
      class="navbar bg-white text-neutral rounded-full top-bar fixed font-poppins"
    >
      <div class="flex-1">
        <a
          class="btn btn-ghost normal-case text-xl rounded-full hover:bg-neutral-content"
          >LIVIN<span class="text-primary">HOME</span></a
        >
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li>
            <a class="rounded-full hover:bg-neutral-content hover:text-white"
              >Beranda</a
            >
          </li>
          <li>
            <a class="rounded-full hover:bg-neutral-content hover:text-white"
              >Pesan</a
            >
          </li>
          <li>
            <a class="rounded-full hover:bg-neutral-content hover:text-white"
              >Pusat Bantuan</a
            >
          </li>
          <li>
            <a class="rounded-full hover:bg-neutral-content hover:text-white"
              >Cart</a
            >
          </li>
          <li>
            <a class="rounded-full hover:bg-neutral-content hover:text-white"
              >Profile</a
            >
          </li>
        </ul>
      </div>
    </div>
    <section class="blue">
      <h1>HI FARHAN</h1>
      <p>
        Temukan sewa properti terjangkau di dekat kampus<br />
        Kamu bersama Livin Kost
      </p>
      <p>
        Pesan sekarang dan nikmati semua layanan kami<br />
        tanpa ribet
      </p>
      <div class="flex items-center">
        <input
          type="text"
          class="input input-bordered flex-1 rounded-full"
          placeholder="Search..."
        />
        <button class="btn btn-primary">Search</button>
      </div>
    </section>
    <section class="dark">
      <h1>Nice Curves</h1>
      <p>
        Non sequi deserunt illum provident consequuntur laudantium, fugit adipisci
        distinctio perspiciatis rem optio facilis quis harum minus exercitationem
        quos laborum odit quae sapiente corporis ad eaque autem! Quod, ipsam in.
      </p>
    </section>
    <section class="pink">
      <h1>Jelajahi Kampus Anda</h1>
      <div class="grid grid-cols-2 gap-4">
        <div class="flex items-center">
          <img alt="Logo 1" class="w-10 h-10 mr-2" />
          <span class="text-lg font-medium">Telkom University</span>
        </div>
        <div class="flex items-center">
          <img alt="Logo 2" class="w-10 h-10 mr-2" />
          <span class="text-lg font-medium">Universitas Padjajaran</span>
        </div>
        <div class="flex items-center">
          <img alt="Logo 3" class="w-10 h-10 mr-2" />
          <span class="text-lg font-medium">Universitas Pasundan</span>
        </div>
        <div class="flex items-center">
          <img  alt="Logo 4" class="w-10 h-10 mr-2" />
          <span class="text-lg font-medium">Universitas Widyatama</span>
        </div>
      </div>
    </section>
    <section class="dark">
      <h1>Nice Curves</h1>
      <p>
        Iste, non aliquam fugiat ea ex sequi itaque, ratione odio quas eveniet
        harum, voluptas beatae? Odit, aliquam iusto accusantium alias consequuntur
        incidunt dolorum autem possimus laboriosam, expedita laborum explicabo
        quisquam!
      </p>
    </section>
    <section class="blue">
      <h1>Nice Curves</h1>
      <p>
        Neque, debitis? Reprehenderit natus iste deserunt possimus quisquam
        accusantium aliquam ipsam maiores praesentium enim eius, facilis rerum
        labore vel incidunt ex suscipit fugit nemo! Officiis eligendi natus esse
        modi veniam!
      </p>
    </section>
    <section>
      <h1 class="judul">Kenapa Livin <span class="text-primary">Kost</span></h1>
      <div>
        <h1> </h1>
      </div>
    </section>
    <footer class="footer p-10 bg-base-200 text-base-content">
      <nav>
        <header class="footer-title text-primary">Alamat</header>
        <a class="link link-hover"
          >Ged. D, Bandung Techno Park, Jl. Telekomunikasi - <br />
          Bandung, Jawa barat 40257
        </a>
        <br />
        <header class="footer-title text-primary">Hubungi Kami</header>
        <a class="link link-hover"
          ><Icon name="ri:mail-fill" color="white" /> livinkost@gmail.com</a
        >
        <a class="link link-hover"
          ><Icon name="ri:whatsapp-line" color="white" /> 088706355120</a
        >
      </nav>
      <nav>
        <header class="footer-title text-primary">Layanan Kami</header>
        <a class="link link-hover">Sewa Rumah Kontrakan</a>
        <a class="link link-hover">Sewa Kamar Kost</a>
        <a class="link link-hover">Sewa Apartemen</a>
        <a class="link link-hover">Jasa Kebersihan</a>
        <a class="link link-hover">Jasa Pasang Provider</a>
        <a class="link link-hover">Jasa Pindah Barang</a>
      </nav>
      <nav>
        <header class="footer-title text-primary">Informasi</header>
        <a class="link link-hover">Tentang Kami</a>
        <a class="link link-hover">Daftar Menjadi Pemilik</a>
        <a class="link link-hover">Pusat Bantuan</a>
        <a class="link link-hover">Kritik & Saran</a>
      </nav>
      <nav>
        <header class="footer-title text-primary">Kebijakan</header>
        <a class="link link-hover">Kebijakan Privasi</a>
        <a class="link link-hover">Syarat & Ketentuan</a>
      </nav>
    </footer>
    <footer
      class="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300"
    >
      <aside class="items-center grid-flow-col">
        <header class="footer-title">Dukung Kami :</header>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12.001 2c-5.523 0-10 4.477-10 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89c1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10Z"
            ></path>
          </svg>
        </a>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6Zm0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0ZM12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.886 2.886 0 0 0-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.91 2.91 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.912 2.912 0 0 0-.703-1.08a2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4Zm0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122c0 2.717-.01 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.884 4.884 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06c-2.717 0-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.89 4.89 0 0 1-1.772-1.153a4.905 4.905 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428c-.048-1.066-.06-1.405-.06-4.122c0-2.717.01-3.056.06-4.122c.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772a4.897 4.897 0 0 1 1.772-1.153c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2Z"
            ></path>
          </svg>
        </a>
      </aside>
      <nav class="md:place-self-center md:justify-self-end">
        <div class="grid grid-flow-col gap-4">
          <a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
              ></path></svg
          ></a>
          <a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <path
                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
              ></path></svg
          ></a>
          <a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
              ></path></svg
          ></a>
        </div>
      </nav>
    </footer>
  </template>
  
  <style>
  body {
    color: white;
    background: #202731;
  }
  section {
    position: static;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 400px;
    padding: 100px 20vw;
  }
  
  .blue {
    background: #3c31dd;
  }
  
  .red {
    background: #dd3131;
  }
  
  .pink {
    background: #ec0461;
  }
  
  .dark {
    background: #1e2228;
  }
  
  .judul {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
  }
  </style>
  