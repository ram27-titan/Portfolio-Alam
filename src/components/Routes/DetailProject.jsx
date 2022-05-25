import React from 'react';

const data = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/ram27/image/upload/v1653406388/portfolio/register_h3cgo1.png',
    title: 'Halaman Register',
    desc: 'Pada Halaman Register ini terdapat 4 data yang perlu di tambahkan yakni, nama,email, password dan foto profile yang kemudian data hasil register tersebut dapat digunakan di halaman login.',
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/ram27/image/upload/v1653406394/portfolio/login_p3nzpo.png',
    title: 'Halaman Login',
    desc: 'Setelah data hasil register sudah tedaftar maka fitur login bisa langsung di akses, yang mana pada fitur login ini hanya memerlukan email dan password untuk proses pengaksesannya, barulah kemudian beberapa fitur pada web ecommerce ini bisa di akses dengan label user, karena pada defaultnya setiap yang melakukan register dan login akan berlabel sebagai user.',
  },

  {
    id: 3,
    image: 'https://res.cloudinary.com/ram27/image/upload/v1653406399/portfolio/profile_lpnnuq.png',
    title: 'Halaman Profile',
    desc: 'Setelah melakukan login , akan langsung di arahkan ke halaman profile sebagaimana yang ada pada gambar diatas. pada halaman profile ini akan menampilkan informasi pribadi yang sesuai dengan data hasil register, selain itu juga terdapat 3 fitur yakni, edit profile, order user, dan ganti password',
  },
  {
    id: 4,
    image: 'https://res.cloudinary.com/ram27/image/upload/v1653406383/portfolio/editProfile_ylsstq.png',
    title: 'Halaman Edit Profile',
    desc: 'Pada Halaman Edit Profile ini terdapat 3 data yang dapat diganti yakni, nama, email, dan foto profile',
  },
  {
    id: 5,
    image: 'https://res.cloudinary.com/ram27/image/upload/v1653406380/portfolio/changePass_xxszs5.png',
    title: 'Halaman Change Password',
    desc: 'Pada Halaman Ubah Password ini terdapat 3 data yang perlu di tambahkan yakni, password lama, password baru dan confirmasi password baru.',
  },
  {
    id: 6,
    image: 'https://res.cloudinary.com/ram27/image/upload/v1653406403/portfolio/banner_up3rfo.png',
    title: 'Halaman Banner Home',
    desc: 'Pada gambar diatas merupakan Halaman Home yang terdapat Banner didalamnya sebagai tambahan UI ',
  },
  {
    id: 7,
    image: 'https://res.cloudinary.com/ram27/image/upload/v1653406389/portfolio/homeProduct_y2by3k.png',
    title: 'Halaman Product Home',
    desc: 'Selain Banner pada halaman home juga terdapat 8 product yang ditampilkan sebagai UI tambahan untuk halaman Home agar lebih menarik dan mengambarkan sebuah ecommerce shop',
  },
  {
    id: 8,
    image: 'https://res.cloudinary.com/ram27/image/upload/v1653406394/portfolio/header_freerl.png',
    title: 'Halaman Header',
    desc: 'Pada logo humberger tersebut terdapat halaman Header yang mana terdapat beberapa fitur seperti, Products, Home , About , Contact , serta 3 logo seperti search , cart dan terkahir profile user',
  },
  {
    id: 9,
    image: 'https://res.cloudinary.com/ram27/image/upload/v1653406389/portfolio/searchProduct_dq1opi.png',
    title: 'Halaman Search',
    desc: 'Pada Halaman Search ini digunakan untuk mencari product. Untuk keyword yang digunakan bisa berdasarkan kategori dan nama product',
  },
  {
    id: 10,
    image: 'https://res.cloudinary.com/ram27/image/upload/v1653406400/portfolio/product1_uxq2aa.png',
    title: 'Halaman Product1',
    desc: 'Pada halaman product yang ada pada gambar diatas dapat menampilkan keseluruhan product. pada halaman product ini juga terdapat 3 filter yakni filter berdasarkan harga , untuk skala harganya 0 - 100jt rupiah kemudian filter berdasarkan kategori serta yang terakhir filter berdasarkan rating , untuk skala rating dari bintang 0 - bintang 5',
  },
  {
    id: 11,
    image: 'https://res.cloudinary.com/ram27/image/upload/v1653406399/portfolio/product2_tpnkmf.png',
    title: 'Halaman Product2',
    desc: 'Pada halaman product ini juga terdapat pagination halaman sebagaimana yang ada pada gambar diatas',
  },

  {
    id: 12,
    image: 'https://res.cloudinary.com/ram27/image/upload/v1653443452/portfolio/productDetail_cj3sat.png',
    title: 'Halaman Detail Product',
    desc: 'Halaman Detail Product ini dapat diakses bila menekan gambar product yang kemudian akan di arahkan langsung ke halaman product detail sebagaimana gambar diatas. Untuk halaman detail product ini menampilkan beberapa informasi mengenai product seperti id product, rating product, harga product, fitur penambahan jumlah product berdasarkan stock yang ada, tampilan stock tersedia atau tidak tersedia, deskripsi product serta review product',
  },
  {
    id: 13,
    image: 'https://res.cloudinary.com/ram27/image/upload/v1653443448/portfolio/ReviewProduct_n5ezz7.png',
    title: 'Halaman Review Product',
    desc: 'Selain Menampilkan informasi product pada halaman detail product ini juga menampilkan hasil review sebagaimana yang ada pada gambar diatas ',
  },

  {
    id: 14,
    image: 'https://res.cloudinary.com/ram27/image/upload/v1653406385/portfolio/cart_b8lccw.png',
    title: 'Halaman Cart Product',
    desc: 'Pada Halaman Keranjang terdapat beberapa fitur yakni, detail product, fitur penambahan/pengurangan jumlah product berdasarkan stock product, harga total per product , dan harga total keseluruhan product. ',
  },
  {
    id: 15,
    image: 'https://res.cloudinary.com/ram27/image/upload/v1653406390/portfolio/shippingDetail_ulwjsu.png',
    title: 'Halaman Info Pengiriman Product',
    desc: 'Pada Halaman Pengiriman product ini terdapat beberapa data yang perlu ditambahkan seperti, alamat rumah, kota , kode pos, nomor telepon, negara dan terkahir provinsi. Untuk Halaman Info data pengiriman ini juga menampilkan UI progress pengiriman seperti yang ada pada gambar diatas ',
  },
  {
    id: 16,
    image: 'https://res.cloudinary.com/ram27/image/upload/v1653406380/portfolio/confirmOrder_gk3zdj.png',
    title: 'Halaman Confirm Order',
    desc: 'Setelah melakukan Checkout pada halaman keranjang kemudian akan diarahakan langsung ke halaman confirmasi order sebagaimana terdapat beberapa informasi prodcut , pengiriman dan fitur. ',
  },
  {
    id: 17,
    image: 'https://res.cloudinary.com/ram27/image/upload/v1653406386/portfolio/payment_zsh9g4.png',
    title: 'Halaman Payment',
    desc: 'Setalah Melakukan confirmasi order maka akan langsung diarahkan ke halaman pembayaran. Untuk sistem pembayaran ini menggunakan stripe, yang mana memerlukan data seperti visa, tanggal pembayaran, serta password',
  },
  {
    id: 18,
    image: 'https://res.cloudinary.com/ram27/image/upload/v1653406388/portfolio/paymentSuccess_qbrbxa.png',
    title: 'Halaman Payment Success',
    desc: 'Setelah berhasil melakukan pembayaran maka akan diarahkan langsung ke halaman pembayaran berhasil sebagaimana yang ada pada gambar diatas.',
  },
  {
    id: 19,
    image: 'https://res.cloudinary.com/ram27/image/upload/v1653406389/portfolio/order_uayuga.png',
    title: 'Halaman Order User',
    desc: 'Pada Halaman Order ini menampilan table order user secara keseluruhan, hal ini di tujukan untuk mengetahui progress order. Untuk table order ini juga menampilkan 4 informasi dan 1 fitur detail order, Informasi yang ditampilkan berupa Id order, status order, jumlah item product, serta total pembayaran  ',
  },
  {
    id: 20,
    image: 'https://res.cloudinary.com/ram27/image/upload/v1653406386/portfolio/orderDetail_cx8t3b.png',
    title: 'Halaman Detail Order User',
    desc: 'Pada halaman detail order user ini menampilkan informasi mengenai order seperti , info pengiriman, info pembayaran, status order serta detail item product',
  },
  {
    id: 21,
    image: 'https://res.cloudinary.com/ram27/image/upload/v1653406384/portfolio/forgotPass_jcvpbo.png',
    title: 'Halaman Forgot Password',
    desc: 'Pada Halaman lupa password ini menampilkan data email yang perlu ditambahkan. Setelah email di tambahkan maka fitur reset password akan di kirim melalui email',
  },
  {
    id: 22,
    image: 'https://res.cloudinary.com/ram27/image/upload/v1653406383/portfolio/dashboardAdmin1_el2lto.png',
    title: 'Halaman Dashboard Admin',
    desc: 'Pada halaman dashboard admin ini menampilkan beberapa infomasi dan fitur seperti, total harga product keseluruhan, jumlah product, order, user, serta beberapa fitur seperti fitur CRUD product , fitur CRUD order, fitur CRUD user, serta fitur CRUD review product ',
  },
  {
    id: 23,
    image: 'https://res.cloudinary.com/ram27/image/upload/v1653406380/portfolio/dashboardAdmin2_mbvvvz.png',
    title: 'Halaman Dashboard Admin2',
    desc: 'Selain itu pada halaman dashboard admin ini juga menampilkan grafik penjualan',
  },
  {
    id: 24,
    image: 'https://res.cloudinary.com/ram27/image/upload/v1653406380/portfolio/dashboardAdmin3_fnnqba.png',
    title: 'Halaman Dashboard Admin3',
    desc: 'Dan pada halaman dashboard admin ini juga menampilkan diagram stock product sebagaimana yang ada pada gambar diatas',
  },
  {
    id: 25,
    image: 'https://res.cloudinary.com/ram27/image/upload/v1653406391/portfolio/allProductAdmin_ul6ufr.png',
    title: 'Halaman All Product Admin',
    desc: 'Pada halaman Product keseluruhan ini menampilkan semua product yang ada dalam sebuah table. Untuk data yang ditampilkan table berupa product ID, nama product, stock product, harga product serta fitur edit product dan delete product ',
  },
  {
    id: 26,
    image: 'https://res.cloudinary.com/ram27/image/upload/v1653406382/portfolio/editProductAdmin_w8yelv.png',
    title: 'Halaman Product Detail Admin',
    desc: 'Pada halaman edit product ini menampilkan beberapa data seperti nama product, harga product, deskripsi product, kategori, stock product dan foto product ',
  },
  {
    id: 27,
    image: 'https://res.cloudinary.com/ram27/image/upload/v1653406383/portfolio/createProductAdmin_ehyanx.png',
    title: 'Halaman Create Product Admin',
    desc: 'Pada halaman buat product ini menampilkan beberapa data yang perlu ditambahkan seperti , nama product , harga product, deskripsi product , kategori, stock product dan foto product',
  },
  {
    id: 28,
    image: 'https://res.cloudinary.com/ram27/image/upload/v1653406391/portfolio/allOrderAdmin_okwqu1.png',
    title: 'Halaman All Order Admin',
    desc: 'Pada halaman order keseluruhan ini menampilkan semua order pada sebuah table. Untuk informasi yang ada pada table berupa ID order, status order, jumlah item product , harga total product , serta fitur edit order dan delete order',
  },
  {
    id: 29,
    image: 'https://res.cloudinary.com/ram27/image/upload/v1653406382/portfolio/editOrderAdmin_h3cea1.png',
    title: 'Halaman Edit Order Detail Admin',
    desc: 'Pada halaman edit order ini menampilkan beberapa informasi order seperti , info pengiriman , info pembayaran, status order , detail product dan fitur proses order',
  },
  {
    id: 30,
    image: 'https://res.cloudinary.com/ram27/image/upload/v1653406394/portfolio/allUserAdmin_nsglxx.png',
    title: 'Halaman All User Admin',
    desc: 'Pada halaman user keseluruhan ini menampilkan semua user dan admin dalam sebuah table . Untuk informasi yang ada pada table berupa ID user, email, nama user, role serta fitur edit user dan delete user  ',
  },
  {
    id: 31,
    image: 'https://res.cloudinary.com/ram27/image/upload/v1653406383/portfolio/editUserAdmin_bpzhmh.png',
    title: 'Halaman Edit User Admin',
    desc: 'Pada halaman edit/update user ini menampilkan 3 data berupa nama user, emial, dan role  ',
  },
  {
    id: 32,
    image: 'https://res.cloudinary.com/ram27/image/upload/v1653406393/portfolio/allReviewAdmin_w6nrex.png',
    title: 'Halaman All Review Admin',
    desc: 'Pada halaman review product keseluruhan ini ditampilkan berdasarkan ID product',
  },
  {
    id: 34,
    image: 'https://res.cloudinary.com/ram27/image/upload/v1653406392/portfolio/allReviewAdminHave_z4qf2w.png',
    title: 'Halaman All Review Have Review Admin',
    desc: 'Setelah itu dapat menampilkan semua review pada suatu product berdasarkan ID product yang di search sebagaimana yang ada pada gambar diatas',
  },
];

const DetailProject = () => {
  return (
    <div className="w-full p-5 ">
      <div>
        <h1 className="text-center text-3xl font-bold text-[#4db5ff]">E-commerce Shop</h1>
        <h2 className="text-center text-xl font-semibold mt-2  ">React JS | Express JS | MongoDB | Material UI | Stripe | Cloudinary</h2>
        <p className="mt-3 text-slate-300">
          Project ini menggunakan teknologi React JS sebagai frontend dan Express JS serta MongoDB sebagai backendnya. Tujuan dalam pembuatan project ini adalah untuk mempelajari sistem ecommerce pada web aplikasi yang menerapkan MERN Stack
          teknologi.Dengan menerapkan autentikasi user dan admin saya membagikan hak akses antara user dan admin pada project ini. Untuk Admin itu sendiri memiliki Halaman Dashboard pribadi sehingga tidak bercampur UI dengan user, hal itu
          juga dapat memudahkan admin dalam memenejemen sistem web aplikasi ecommerce ini. Fitur-fitur yang ada pada project ini juga hampir keseluruhan sudah menerapkan sistem ecommerce pada umumnya dimana sebagai berikut :
        </p>
        <div className="grid grid-cols-1 md:grid md:grid-cols-3 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-4 ">
          {data.map(({ id, title }) => {
            return (
              <ul key={id}>
                <li>
                  {' '}
                  <span className="text-[#4db5ff]">*</span> <span className="text-slate-300">{title}</span>
                </li>
              </ul>
            );
          })}
        </div>
        <p className="text-slate-300">Untuk lebih detailnya saya menjelaskan tiap bagian fitur halaman dibawah ini.</p>
      </div>
      <div className="grid grid-cols-1 md:grid md:grid-cols-2 ">
        {data.map(({ id, image, desc, title }) => {
          return (
            <div key={id}>
              <div className="m-2">
                <h1 className=" text-lg font-semibold">{title}</h1>
                <img src={image} alt={title} className="rounded-md" />
              </div>
              <div>
                <p className="text-slate-300">{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailProject;
