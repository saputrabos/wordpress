# wordpress

Project ini sudah diubah dari plugin menjadi child theme bernama `annur`.

Struktur utama:
- `annur/style.css` — stylesheet utama child theme
- `annur/functions.php` — register sidebar dan widget
- `annur/front-page.php` — template halaman depan yang menampilkan area widget
- `annur/widgets/class-annur-hero-widget.php` — kelas widget custom Annur Hero

Widget dibuat langsung di child theme, bukan lagi dari plugin. Setelah aktifkan theme `Annur`, widget `Annur Hero Widget` bisa dipakai di sidebar atau area widget yang sudah dibuat.
