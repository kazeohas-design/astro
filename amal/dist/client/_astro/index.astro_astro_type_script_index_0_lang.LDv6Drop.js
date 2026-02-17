import{S as i}from"./sweetalert2.esm.all.NNS-RXd7.js";let T=!1;document.addEventListener("DOMContentLoaded",()=>{const o=document.getElementById("nikLookup"),s=document.getElementById("wizard-wrap"),d=document.getElementById("btnCari");window.jQuery&&window.jQuery.fn&&window.jQuery.fn.select2&&window.jQuery("select.form-select").each(function(){const t=window.jQuery(this);t.data("select2")||t.select2({width:"100%"})}),document.addEventListener("keydown",t=>{!!document.querySelector(".swal2-container.swal2-shown")&&(t.key==="Enter"&&t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation())},!0);const k=()=>s&&s.classList.remove("d-none"),u=()=>s&&s.classList.add("d-none");u();async function a(){const t=(o&&o.value||"").replace(/\D/g,"").slice(0,16);if(o&&(o.value=t),t.length!==16){await c("warning","NIK tidak valid","Format harus 16 digit angka."),u();return}if(!T){T=!0;try{v("Loading...","Mohon tunggu sebentar, kami sedang memvalidasi NIK Anda.");let n;try{n=await window.validateNIKWithWilayah(t)}catch(e){await c("error","Validasi wilayah gagal",e?.message||"Tidak dapat menghubungi API wilayah."),u();return}if(!n.valid){await c("warning","NIK tidak valid",n.reason||"Mohon periksa kembali NIK Anda."),u();return}v("Mencari NIK Anda...","Mohon tunggu sebentar");const r=await(await fetch(`/api/backend/cek_nik?nik=${t}`)).json();i.isVisible()&&i.close();const A=document.getElementById("form-wizard");if(A&&typeof A.reset=="function"&&A.reset(),r.status==200){o&&(o.blur(),o.disabled=!0),await c("success","Berhasil!","NIK ditemukan.");const e=r.data||{};try{$("#nama_lengkap").val(e.nama_penduduk||"").prop("disabled",!0),$("#id_penduduk").val(e.id||""),$("#tempat").val(e.tempat||"").prop("disabled",!0),$("#no_kk").val(e.no_urut||"").prop("disabled",!0),$("#ke_akte").html(`
                    <option value="Iya" ${e.kepemilikan_akte==="1"?"selected":""}>Iya</option>
                              <option value="Tidak" ${e.kepemilikan_akte==="0"?"selected":""}>Tidak</option>
                  `).prop("disabled",!0),$("#ke_ktp").html(`
                    <option value="Iya" ${e.kepemilikan_ktp==="1"?"selected":""}>Iya</option>
                              <option value="Tidak" ${e.kepemilikan_ktp==="0"?"selected":""}>Tidak</option>
                  `).prop("disabled",!0),$("#jenis_kelamin").html(`
          <option value="1" ${e.jenis_kelamin==="1"?"selected":""}>Laki - Laki</option>
          <option value="2" ${e.jenis_kelamin==="2"?"selected":""}>Perempuan</option>
        `).prop("disabled",!0),$("#agama").html(`
                              <option value="Islam" ${e.agama==="Islam"?"selected":""}>Islam</option>
                              <option value="Kristen" ${e.agama==="Kristen"?"selected":""}>Kristen</option>
                              <option value="Katolik" ${e.agama==="Katolik"?"selected":""}>Katolik</option>
                              <option value="Hindu" ${e.agama==="Hindu"?"selected":""}>Hindu</option>
                              <option value="Budha" ${e.agama==="Budha"?"selected":""}>Budha</option>
                              <option value="Konghucu" ${e.agama==="Konghucu"?"selected":""}>Konghucu</option>
                  `).prop("disabled",!0),$("#pendidikan_terakhir").html(`
                           <option value="SD/SEDERAJAT" ${e.pendidikan_terakhir==="SD/SEDERAJAT"?"selected":""}>SD/SEDERAJAT</option>
                              <option value="SMP/MTS" ${e.pendidikan_terakhir==="SMP/MTS"?"selected":""}>SMP/MTS</option>
                              <option value="SMA/SMK" ${e.pendidikan_terakhir==="SMA/SMK"?"selected":""}>SMA/SMK</option>
                              <option value="D1" ${e.pendidikan_terakhir==="D1"?"selected":""}>D1</option>
                              <option value="D2" ${e.pendidikan_terakhir==="D2"?"selected":""}>D2</option>
                              <option value="D3" ${e.pendidikan_terakhir==="D3"?"selected":""}>D3</option>
                              <option value="S1" ${e.pendidikan_terakhir==="S1"?"selected":""}>S1</option>
                              <option value="S2" ${e.pendidikan_terakhir==="S2"?"selected":""}>S2</option>
                              <option value="S3"  ${e.pendidikan_terakhir==="S3"?"selected":""}>S3</option>
                  `).prop("disabled",!0),$("#pendidikan_saat_ini").html(`
                           <option value="SD/SEDERAJAT" ${e.pendidikan_terakhir==="SD/SEDERAJAT"?"selected":""}>SD/SEDERAJAT</option>
                              <option value="SMP/MTS" ${e.pendidikan_terakhir==="SMP/MTS"?"selected":""}>SMP/MTS</option>
                              <option value="SMA/SMK" ${e.pendidikan_terakhir==="SMA/SMK"?"selected":""}>SMA/SMK</option>
                              <option value="D1" ${e.pendidikan_terakhir==="D1"?"selected":""}>D1</option>
                              <option value="D2" ${e.pendidikan_terakhir==="D2"?"selected":""}>D2</option>
                              <option value="D3" ${e.pendidikan_terakhir==="D3"?"selected":""}>D3</option>
                              <option value="S1" ${e.pendidikan_terakhir==="S1"?"selected":""}>S1</option>
                              <option value="S2" ${e.pendidikan_terakhir==="S2"?"selected":""}>S2</option>
                              <option value="S3"  ${e.pendidikan_terakhir==="S3"?"selected":""}>S3</option>
                  `).prop("disabled",!0),$("#jenis_pekerjaan").html(`
                       <option value="TIDAK BEKERJA" ${e.pekerjaan==="TIDAK BEKERJA"?"selected":""}
                                >TIDAK BEKERJA</option
                              >
                              <option value="PELAJAR/MAHASISWA" ${e.pekerjaan==="PELAJAR/MAHASISWA"?"selected":""}
                                >PELAJAR/MAHASISWA</option
                              >
                              <option value="PNS/TNI/POLRI" ${e.pekerjaan==="PNS/TNI/POLRI"?"selected":""}
                                >PNS/TNI/POLRI</option
                              >
                              <option value="KARYAWAN SWASTA" ${e.pekerjaan==="KARYAWAN SWASTA"?"selected":""}
                                >KARYAWAN SWASTA</option
                              >
                              <option value="WIRASWASTA" ${e.pekerjaan==="WIRASWASTA"?"selected":""}>WIRASWASTA</option>
                              <option value="PETANI" ${e.pekerjaan==="PETANI"?"selected":""}>PETANI</option>
                              <option value="NELAYAN" ${e.pekerjaan==="NELAYAN"?"selected":""}>NELAYAN</option>
                              <option value="BURUH" ${e.pekerjaan==="BURUH"?"selected":""}>BURUH</option>
                              <option value="PENSIUNAN" ${e.pekerjaan==="PENSIUNAN"?"selected":""}>PENSIUNAN</option>
                              <option value="LAINNYA" ${e.pekerjaan==="LAINNYA"?"selected":""}>LAINNYA</option>
                  `).prop("disabled",!0),$("#kondisi_pekeerjaan").html(`
                         <option value="TETAP" ${e.kondisi_pekerjaan==="TETAP"?"selected":""}  >TETAP</option>
                              <option value="TIDAK TETAP" ${e.kondisi_pekerjaan==="TIDAK TETAP"?"selected":""}>TIDAK TETAP</option>
                  `).prop("disabled",!0),$("#sumber").val(e.sumber_penghasilan||"").prop("disabled",!0),$("#bansos").html(` 
                              <option value="TIDAK ADA" ${e.bansos==="TIDAK ADA"?"selected":""}>TIDAK ADA</option>
                              <option value="PKH" ${e.bansos==="PKH"?"selected":""}>PKH</option>
                              <option value="BPNT" ${e.bansos==="BPNT"?"selected":""}>BPNT</option>
                              <option value="BST" ${e.bansos==="BST"?"selected":""}>BST</option> 
                              <option value="LAINNYA" ${e.bansos==="LAINNYA"?"selected":""}>LAINNYA</option>
                  `).prop("disabled",!0),$("#bpjs").html(` 
                              <option value="TERDAFTAR" ${e.bpjs==="TERDAFTAR"?"selected":""}>TERDAFTAR</option>
                              <option value="TIDAK TERDAFTAR" ${e.bpjs==="TIDAK TERDAFTAR"?"selected":""}>TIDAK TERDAFTAR</option> 
                  `).prop("disabled",!0),$("#status_nikah").html(` 
                              <option value="MENIKAH" ${e.status_nikah==="MENIKAH"?"selected":""}>MENIKAH</option>
                              <option value="BELUM MENIKAH" ${e.status_nikah==="BELUM MENIKAH"?"selected":""}>BELUM MENIKAH</option> 
                              <option value="CERAI HIDUP" ${e.status_nikah==="CERAI HIDUP"?"selected":""}>CERAI HIDUP</option> 
                              <option value="CERAI MATI" ${e.status_nikah==="CERAI MATI"?"selected":""}>CERAI HIDUP</option> 
                              <option value="LAINNYA" ${e.status_nikah==="LAINNYA"?"selected":""}>CERAI HIDUP</option> 
                  `).prop("disabled",!0),$("#pemilik_aktenikah").html(` 
                              <option value="ADA" ${e.pemilik_aktenikah==="ADA"?"selected":""}>ADA</option>
                              <option value="TIDAK ADA" ${e.pemilik_aktenikah==="TIDAK ADA"?"selected":""}>TIDAK ADA</option>  
                  `).prop("disabled",!0),$("#pemilik_aktecerai").html(` 
                              <option value="ADA" ${e.pemilik_aktecerai==="ADA"?"selected":""}>ADA</option>
                              <option value="TIDAK ADA" ${e.pemilik_aktecerai==="TIDAK ADA"?"selected":""}>TIDAK ADA</option>  
                  `).prop("disabled",!0),$("#shdrt").html(` 
                              <option value="KEPALA KELUARGA" ${e.shdrt==="KEPALA KELUARGA"?"selected":""}>KEPALA KELUARGA</option>
                              <option value="ISTRI" ${e.shdrt==="ISTRI"?"selected":""}>ISTRI</option>  
                              <option value="ANAK" ${e.shdrt==="ANAK"?"selected":""}>ANAK</option>  
                              <option value="ORANG TUA" ${e.shdrt==="ORANG TUA"?"selected":""}>ORANG TUA</option>  
                              <option value="MERTUA" ${e.shdrt==="MERTUA"?"selected":""}>MERTUA</option>  
                  `).prop("disabled",!0),$("#darah").html(` 
                              <option value="A" ${e.shdrt==="A"?"selected":""}>A</option>
                              <option value="B" ${e.shdrt==="B"?"selected":""}>B</option>  
                              <option value="AB" ${e.shdrt==="AB"?"selected":""}>AB</option>  
                              <option value="O" ${e.shdrt==="O"?"selected":""}>O</option>    
                  `).prop("disabled",!0),$("#kwn").val(e.kewarganegaraan||"").prop("disabled",!0),$("#nama_ayah").val(e.nama_ayah||"").prop("disabled",!0),$("#nama_ibu").val(e.nama_ibu||"").prop("disabled",!0),$("#alamat").val(e.alamat||"").prop("disabled",!0),$("#rt").val(e.rt_rw||"").prop("disabled",!0),$("#desa").val(e.desa||"").prop("disabled",!0),$("#ket_domis").val(e.ket_domisili||"").prop("disabled",!0),$("#tujuan_mutasi").val(e.tujuan_mutasi||"").prop("disabled",!0),$("#ket_mutasi").val(e.ket_mutasi||"").prop("disabled",!0),$("#sebab_mutasi").val(e.sebab_mutasi||"").prop("disabled",!0),$("#sehat").val(e.kondisi_kesehatan||"").prop("disabled",!0),$("#no_hp").val(e.hp||"").prop("disabled",!0),$("#penyakit").val(e.penyakit||"").prop("disabled",!0),$("#disabilitas").val(e.disabilitas||"").prop("disabled",!0),$("#status_domis").html(` 
                              <option value="TETAP" ${e.status_domis==="TETAP"?"selected":""}>TETAP</option>
                              <option value="SEMENTARA" ${e.status_domis==="SEMENTARA"?"selected":""}>SEMENTARA</option>   
                  `).prop("disabled",!0),$("#mutasi").html(` 
                              <option value="PINDAH MASUK" ${e.mutasi==="PINDAH MASUK"?"selected":""}>PINDAH MASUK</option>
                              <option value="PINDAH KELUAR" ${e.mutasi==="PINDAH KELUAR"?"selected":""}>PINDAH KELUAR</option>   
                              <option value="KEMATIAN" ${e.mutasi==="KEMATIAN"?"selected":""}>KEMATIAN</option>   
                              <option value="PERKAWINAN" ${e.mutasi==="PERKAWINAN"?"selected":""}>KEMATIAN</option>   
                  `).prop("disabled",!0),$("#yatim").html(` 
                              <option value="TIDAK ADA" ${e.yatim_piatu==="TIDAK ADA"?"selected":""}>TIDAK ADA</option>
                              <option value="YATIM" ${e.yatim_piatu==="YATIM"?"selected":""}>YATIM</option>
                              <option value="PIATU" ${e.yatim_piatu==="PIATU"?"selected":""}>PIATU</option>
                              <option value="YATIM PIATU" ${e.yatim_piatu==="YATIM PIATU"?"selected":""}>YATIM PIATU</option> 
                  `).prop("disabled",!0),$("#bpjs_kesehatan").html(` 
                              <option value="TERDAFTAR" ${e.bpjs_kesehatan==="TERDAFTAR"?"selected":""}>TERDAFTAR</option>
                              <option value="TIDAK TERDAFTAR" ${e.bpjs_kesehatan==="TIDAK TERDAFTAR"?"selected":""}>TIDAK TERDAFTAR</option> 
                  `).prop("disabled",!0),$("#status_rumah").html(` 
                              <option value="MILIK SENDIRI" ${e.status_rumah==="MILIK SENDIRI"?"selected":""}>MILIK SENDIRI</option>
                              <option value="KONTRAK" ${e.status_rumah==="KONTRAK"?"selected":""}>KONTRAK</option> 
                  `).prop("disabled",!0),$("#status_lahan").html(` 
                              <option value="MILIK SENDIRI" ${e.status_lahan==="MILIK SENDIRI"?"selected":""}>MILIK SENDIRI</option>
                              <option value="SEWA" ${e.status_lahan==="SEWA"?"selected":""}>SEWA</option> 
                              <option value="LAINNYA" ${e.status_lahan==="LAINNYA"?"selected":""}>SEWA</option> 
                  `).prop("disabled",!0),$("#layak").html(` 
                              <option value="LAYAK" ${e.layak==="LAYAK"?"selected":""}>LAYAK</option>
                              <option value="TIDAK LAYAK" ${e.layak==="TIDAK LAYAK"?"selected":""}>TIDAK LAYAK</option>  
                  `).prop("disabled",!0),$("#penerangan").html(` 
                              <option value="LISTRIK PLN" ${e.penerangan==="LISTRIK PLN"?"selected":""}>LISTRIK PLN</option>
                              <option value="LISTRIK NON PLN" ${e.penerangan==="LISTRIK NON PLN"?"selected":""}>LISTRIK NON PLN</option>  
                              <option value="TIDAK LISTRIK" ${e.penerangan==="TIDAK LISTRIK"?"selected":""}>TIDAK LISTRIK</option>  
                  `).prop("disabled",!0),$("#sumber_air").html(` 
                              <option value="PDAM" ${e.sumber_air==="PDAM"?"selected":""}>PDAM</option>
                              <option value="SUMUR" ${e.sumber_air==="SUMUR"?"selected":""}>SUMUR</option>  
                              <option value="AIR KEMASAN" ${e.sumber_air==="AIR KEMASAN"?"selected":""}>AIR KEMASAN</option>  
                              <option value="LAINNYA" ${e.sumber_air==="LAINNYA"?"selected":""}>LAINNYA</option>  
                  `).prop("disabled",!0),$("#jamban").html(` 
                              <option value="ADA" ${e.sumber_air==="ADA"?"selected":""}>ADA</option>
                              <option value="TIDAK ADA" ${e.sumber_air==="TIDAK ADA"?"selected":""}>TIDAK ADA</option>   
                  `).prop("disabled",!0)}catch(l){throw console.error("Gagal set input identitas:",l),new Error("Gagal set input identitas")}try{const l=(I,h)=>{const m=document.getElementById(I);if(!m)throw new Error(`#${I} tidak ditemukan`);if(!m._flatpickr){if(typeof flatpickr!="function")throw new Error("flatpickr belum ter-load");flatpickr(m,{dateFormat:"d-m-Y",locale:flatpickr.l10ns.id})}m._flatpickr.setDate(h||"",!0,"Y-m-d"),m._flatpickr.input.disabled=!0};l("tanggal",e.tanggal_lahir),l("tgl_nikah",e.tanggal_nikah),l("tgl_mutasi",e.tgl_mutasi)}catch(l){console.error("Gagal set tanggal/flatpickr:",l)}k(),setTimeout(()=>{const l=$("#form-wizard");try{l.steps("next")}catch{l.closest(".wizard-content").find(".actions a[href='#next']").trigger("click")}},0)}else await c("error","Tidak ditemukan","NIK tidak ditemukan. Silahkan isi biodata terlebih dahulu."),k()}catch(n){i.isVisible()&&i.close(),await c("error","Ups, ada yang salah",n?.message||"Terjadi kesalahan tak terduga."),u()}finally{T=!1}}}o&&o.addEventListener("keydown",t=>{if(t.key==="Enter"){if(t.preventDefault(),o.disabled||typeof i<"u"&&i.isVisible&&i.isVisible()||!!document.querySelector(".swal2-container.swal2-shown")||T)return;a()}const n=["Backspace","Tab","ArrowLeft","ArrowRight","Delete"];t.key&&!/^[0-9]$/.test(t.key)&&!n.includes(t.key)&&!(t.ctrlKey||t.metaKey)&&t.preventDefault()}),d&&d.addEventListener("click",t=>{t.preventDefault(),T||a()})});window.addEventListener("load",()=>{function o(a){a.forEach(t=>{flatpickr(t,{dateFormat:"d-m-Y",locale:flatpickr.l10ns.id})})}o(["#tanggal","#tgl_nikah","#tgl_mutasi"]);function s(a){if(!a)return"";if(typeof a=="string"||typeof a=="number")return String(a);const t=["tiket"],n=r=>{if(!r||typeof r!="object")return"";for(const A of t){const e=r[A];if(e!=null&&String(e).trim()!=="")return String(e)}return""};let p=n(a);return p||(Array.isArray(a)&&a.length?n(a[0]):(p=n(a.data),p||(Array.isArray(a.data)&&a.data.length?n(a.data[0]):"")))}let d=!1;function k(a){const t=$("#form-wizard").closest(".wizard-content").find(".actions a[href='#finish']");t.toggleClass("disabled",a),t.attr("aria-disabled",String(a)),t.css("pointer-events",a?"none":""),t.css("opacity",a?"0.65":"")}$(document).on("click","#form-wizard .actions a[href='#finish']",a=>{a.preventDefault(),!d&&u()});async function u(){if(d)return;d=!0,k(!0),v("Mengirim pengaduan...","Mohon tunggu, data Anda sedang diproses.");const a=$("#form-wizard"),t=a.find(":input:disabled").prop("disabled",!1),n=($("#id_layanan option:selected").text()||"").trim(),p=$("#nikLookup").val()||"",r=new FormData(a[0]);r.append("layanan",n),r.append("nik",String(p)),t.prop("disabled",!0);let A=!1;try{const e=await fetch("/api/backend/pengaduan",{method:"POST",body:r}),l=await e.json().catch(()=>({}));if(!e.ok)throw new Error(l?.message||"Gagal mengirim.");const I=s(l),h=new URL("/form_layanan/success",window.location.origin);I&&h.searchParams.set("ticket",I),A=!0,window.location.assign(h.toString());return}catch(e){i.isVisible()&&i.close(),await i.fire({icon:"error",title:"Gagal!",text:e&&e.message||"Pengaduan gagal dikirim.",allowEnterKey:!1,focusConfirm:!0,returnFocus:!1,stopKeydownPropagation:!0})}finally{A||(d=!1,k(!1))}}});function v(o,s){i.isVisible()?i.update({icon:void 0,title:o,text:s||"",showConfirmButton:!1,allowOutsideClick:!1,allowEnterKey:!1,allowEscapeKey:!1,didOpen:()=>i.showLoading()}):i.fire({title:o,text:s||"",showConfirmButton:!1,allowOutsideClick:!1,allowEnterKey:!1,allowEscapeKey:!1,didOpen:()=>i.showLoading()})}async function c(o,s,d){return i.isVisible()&&i.close(),i.fire({icon:o,title:s,text:d,allowEnterKey:!1})}
