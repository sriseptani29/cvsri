function RowPekerjaan(props:any) {
    return (
      <div className="border-2 border-indigo-500/75 rounded-lg bg-gray-200 p-2 my-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-12 md:col-span-4">{props.sebagai}</div>
            <div className="col-span-12 md:col-span-4">{props.instansi}</div>
            <div className="col-span-12 md:col-span-4">{props.tahun}</div>
          </div>
        </div>
      </div>
    );
  }
  
export default function RiwayatPekerjaan() {
return (
  <div className="container mx-auto p-2 text-center pt-20">
    <h2 className="text-2xl">Riwayat Pekerjaan</h2>  
    <RowPekerjaan sebagai="Guru SMK" instansi="SMK Garuda'" tahun="1999" />
    <RowPekerjaan sebagai="Staff IT" instansi="Dinas Sosial" tahun="2002" />
    <RowPekerjaan sebagai="Programmer" instansi="CV GMedia" tahun="2005" />
    <RowPekerjaan sebagai="Dosen" instansi="Universitas Ma'soem" tahun="2008" />
  </div>
  );
}