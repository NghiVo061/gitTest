import React, { useState } from "react";
import { Table, Input, Button } from "antd";
import { title } from "process";

const Test1 = () => {
    const [searchText, setSearchText] = useState('');
    const columns = [
        {title: 'Id', dataIndex: 'id', key: 'id'},
        {title: 'Student Code', dataIndex: 'studentCode', key: 'studentCode'},
        {title: 'Student Name', dataIndex: 'studentName', key: 'studentName'},
        {title: 'Final Test', dataIndex: 'result', key: 'result'},
        {title: 'Home Town', dataIndex: 'hometown', key: 'hometown'}]
        const data = [
            {id:1, studentCode: '0909001', studentName: 'Le Van Thang', result: 8, hometown: 'TPHCM'},
            {id:2, studentCode: '0909003', studentName: 'Tran Minh Tam', result: 7.5, hometown: 'Dong Nai'},
            {id:3, studentCode: '0909002', studentName: 'Ly Uyen Nhi', result: 8.6, hometown: 'TPHCM'},
            {id:4, studentCode: '0909004', studentName: 'Trinh Thi Thu Thao', result: 6, hometown: 'Tien Giang'},
            {id:5, studentCode: '0909005', studentName: 'Le Van Thang', result: 8, hometown: 'Khanh Hoa'}
        ]
        const [idToDelete, setIdToDelete] = useState('');
        const [searchData, setSearchData] = useState(data);
        const [myProvinces, setMyProvince] = useState<string[]>([]);
        return(
            <div>
            Find student by name: <input type="text"
            value={searchText} onChange={(e)=>{
                setSearchData(data.filter(x=>x.studentName.toLowerCase().includes(e.currentTarget.value.toLowerCase().trim())))
                setSearchText(e.currentTarget.value)
            }}
            onKeyPress={(e)=>{
                if(e.key == 'Enter') {
                    setSearchData(data.filter(x=>x.studentName.toLowerCase().includes(searchText.toLowerCase().trim())))
                }
            }}
            />&nbsp;
            <input type="checkbox" onChange={(e) => {
                if (e.currentTarget.checked) {
                    setMyProvince([...myProvinces, 'TPHCM']);
                }
                else {
                    setMyProvince(myProvinces.filter(province => province !== 'TPHCM'));
                }
            }}
            />&nbsp;TPHCM &nbsp;

            <input type="checkbox" onChange={(e) => {
                if (e.currentTarget.checked) {
                    setMyProvince([...myProvinces, 'Dong Nai']);
                }
                else {
                    setMyProvince(myProvinces.filter(province => province !== 'Dong Nai'));
                }
            }
            } />&nbsp;Đồng Nai&nbsp;

            <input type="checkbox" onChange={(e) => {
                if (e.currentTarget.checked) {
                    setMyProvince([...myProvinces, 'Khanh Hoa']);
                }
                else {
                    setMyProvince(myProvinces.filter(province => province !== 'Khanh Hoa'));
                }
            }
            } />&nbsp;Khánh Hòa&nbsp;

            <input type="checkbox" onChange={(e) => {
                if (e.currentTarget.checked) {
                    setMyProvince([...myProvinces, 'Tien Giang']);
                }
                else {
                    setMyProvince(myProvinces.filter(province => province !== 'Tien Giang'));
                }
            }
            } />&nbsp;Tiền Giang&nbsp;

            
            <Button type="primary"
                onClick={() => {
                    // Cập nhật điểm
                    let index: any = data.findIndex(a => a.id == 2)
                    if (index != -1)
                        data[index].result = 9;
                    let previous = data.slice(0, index);
                    let nexts = data.slice(index + 1);
                    setSearchData([...previous, data[index], ...nexts]);

                    if (myProvinces.length === 0) {
                        setSearchData(data); 
                    } else {
                        setSearchData(data.filter(x => myProvinces.includes(x.hometown)));
                    }
                }}
            >Loc du lieu</Button>
            <Table columns={columns}
            dataSource={searchData}
            />
            <button onClick={()=>{
            localStorage.clear();
            window.location.reload();
            }}>Logout</button>
            </div>
        )
}
export default Test1;



