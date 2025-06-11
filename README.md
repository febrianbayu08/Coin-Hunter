# Coin Hunter - Bayu

Coin Hunter adalah game platformer 2D sederhana yang dibuat menggunakan **Phaser 3**, di mana pemain harus mengumpulkan koin dan menghindari musuh untuk melanjutkan ke level berikutnya.

## Fitur Game

* Platformer 2D side-scroller
* Sistem level dinamis
* Koin yang dapat dikumpulkan dengan animasi partikel
* Musuh yang harus dihindari
* Transisi antar level dengan animasi
* Efek suara dan musik latar
* Tampilan game over saat menyentuh musuh

## Struktur Proyek

```
project/
├── index.html               # File utama HTML untuk menjalankan game
├── scenePlay.js            # Skrip utama scene permainan
├── assets/
│   ├── images/             # Folder untuk gambar (background, player, musuh, dll)
│   └── audio/              # Folder untuk file audio (musik, efek suara)
└── README.md               # Dokumentasi ini
```

## Cara Menjalankan

1. Pastikan Anda memiliki web server lokal (contoh: Live Server di VSCode, http-server, dll)
2. Jalankan file `index.html` di browser
3. Klik tombol **Play** untuk memulai permainan

## Kontrol Pemain

* Panah Kiri/Kanan: Bergerak ke kiri dan kanan
* Panah Atas: Melompat

## Dependensi

Game ini menggunakan:

* [Phaser 3](https://phaser.io/phaser3) (versi 3.60.0)

Disertakan melalui CDN di dalam file `index.html`:

```html
<script src="https://cdn.jsdelivr.net/npm/phaser@3.60.0/dist/phaser.min.js"></script>
```



| Tipe   | Key        | File Path / Preview                        |
| ------ | ---------- | ------------------------------------------ |
| Gambar | `BG.png` | ![bg](![BG](https://github.com/user-attachments/assets/292d74c5-5550-4124-8340-3172ed999262)
) |
| Gambar | `CharaSpriteAnim.png` | ![CharaSpriteAnim](https://github.com/user-attachments/assets/c1c045cb-2e5e-40bc-8755-7d3f8d57dcca)
)
) |
| Gambar | `ButtonPlay.png` | ![![CharaSpriteAnim](https://github.com/user-attachments/assets/4137d0b2-702c-4509-be87-1bed5c5a16ac)
)
) |
| Gambar | `GameOver.png` | !9a44c07-ada2-4e43-a872-167d5e1048a8)
) |

## Lisensi

Proyek ini dibuat untuk tujuan pembelajaran dan pengembangan pribadi.

---

Dibuat oleh **Bayu**
