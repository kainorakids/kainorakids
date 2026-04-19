Cara deploy ke GitHub Pages:

1. Extract ZIP ini di komputer Anda.
2. Upload SEMUA isi folder ke root repository GitHub Anda.
3. Pastikan file `index.html` ada di root repo.
4. Buka Settings > Pages.
5. Pada Source, pilih `Deploy from a branch`.
6. Pilih branch `main` dan folder `/ (root)`.
7. Simpan lalu tunggu deploy selesai.

Catatan:
- Jangan upload file ZIP mentah ke repository. Upload isi foldernya.
- Semua asset sudah lokal, jadi tidak bergantung pada link gambar eksternal.
- Website ini memakai path relatif, jadi aman dipakai pada GitHub Pages project site seperti `/nama-repo/`.
