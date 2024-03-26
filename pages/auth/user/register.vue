<template>
    <div class="flex flex-row justify-start items-center">
        <div class="card w-2/5 bg-base shadow-xl">
            <div class="card-body">
                <h2 class="card-title justify-center mb-8">Buat Akun Penyewa</h2>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Nama Lengkap</span>
                    </label>
                    <input type="text" placeholder="Masukkan Nama Lengkap" class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="Masukkan Email" class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Jenis Kelamin</span>
                    </label>
                    <div class="flex items-center">
                        <div class="flex items-center">
                            <input id="pria" type="radio" name="gender" class="radio radio-primary" checked />
                            <label for="pria" class="ml-2 text-lg">Pria</label>
                        </div>
                        <div class="flex items-center px-8">
                            <input id="wanita" type="radio" name="gender" class="radio radio-primary" />
                            <label for="wanita" class="ml-2 text-lg">Wanita</label>
                        </div>
                    </div>
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Tanggal Lahir</span>
                    </label>

                    <input type="text" class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">No. Handphone</span>
                    </label>

                    <input type="text" placeholder="Masukkan No. Handphone" class="input input-bordered" />

                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Kata Sandi</span>
                    </label>
                    <input type="password" placeholder="Minimal 8 Karakter (huruf & angka)"
                        class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Ulang Kata Sandi</span>
                    </label>
                    <input type="password" placeholder="Masukkan ulang kata sandi" class="input input-bordered" />
                </div>
                <div class="label-text-alt text-center text-wrap">
                    Penting untuk Memahami Ketentuan Kami. Mohon Setujui Syarat dan Ketentuan Livinhome
                </div>
                <div class="form-control">
                    <label class="cursor-pointer label">
                        <span class="label-text">Saya telah membaca dan menyetujui Syarat dan Ketentuan Livinhome</span>
                        <input type="radio" class="radio radio-primary" />
                    </label>
                </div>
                <div class="form-control mt-6">
                    <button class="btn btn-primary">Daftar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style></style>