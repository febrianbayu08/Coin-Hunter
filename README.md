# Coin Hunter - Bayu

![image](https://github.com/user-attachments/assets/b05b2b71-46a7-42df-9942-fc4c05441fe8)


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
| Gambar | `ButtonPlay.png` | ![![ButtonPlay](https://github.com/user-attachments/assets/c8016a08-a65b-4fe7-a851-4ad27fc88706)
)
)
) |
| Gambar | `GameOver.png` | ![GameOver](https://github.com/user-attachments/assets/26228b04-a7f6-4dff-bdc8-cfad46a8448b)
)
) |
| Gambar | `Koin.png` | ![Koin](https://github.com/user-attachments/assets/bb1dfe9c-3615-429e-b79c-f2238496ee08)
) |
| Gambar | `Musuh01.png` | ![Musuh01](https://github.com/user-attachments/assets/0c575cca-398c-4bb2-b98f-f46e20eb2073)
) |
| Gambar | `Musuh02.png` |![Musuh02](https://github.com/user-attachments/assets/211f6b1b-0050-492b-9715-785978e2050f)
) |
| Gambar | `Musuh03.png` |![Musuh03](https://github.com/user-attachments/assets/441346ec-bfc4-4502-83bf-84bd1237a711)
) |
| Gambar | `PanelCoin.png` | ![PanelCoin](https://github.com/user-attachments/assets/025be76e-d516-443c-82fd-01ae419efb33)
) |
| Gambar | `Tile50.png` | ![Tile50](https://github.com/user-attachments/assets/45b0132b-9f1b-4bbc-a774-41b9b7ffc431)








## Lisensi

Proyek ini dibuat untuk tujuan pembelajaran dan pengembangan pribadi.

---

Dibuat oleh **Febrian Bayu**
