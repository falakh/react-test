import  axios  from "axios";
import { async } from "q";

export interface Mahasiswa{
    nama: String
    nim : String
}
export interface SemhasRequest{
    undangan : String
    mahasiswa : Mahasiswa
}

export async function requestSemhas(semhasRequest : SemhasRequest){
    var response = await axios.post("http://hmif.filkom.ub.ac.id/pendataan-audiens-semhas/daftar?undangan="+semhasRequest.undangan
    ,{
        nama : semhasRequest.mahasiswa.nama,
        nim : semhasRequest.mahasiswa.nim
    }
    )
    console.log(response.data)
}