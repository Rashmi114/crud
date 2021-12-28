// localStorage.clear();
let id = '';
selectData();
function submitData(){
let names = document.getElementById('name').value;
if(names == ''){
document.getElementById('main').innerHTML = 'Please enter your name';
} else{
    if(id == ''){
        let array = getCrudData();
        if(array == null){
            let data = [names];
            setCrudData(data);
        }else{
            array.push(names);
            setCrudData(array);
        }
        document.getElementById('name').value = '';
        document.getElementById('main').innerHTML = 'Added Successfully';
    }else{
        let array = getCrudData();
        array[id] = names;
        setCrudData(array);
        document.getElementById('main').innerHTML = 'Updated Successfully';
    }
    selectData();
}
}
function selectData(){
    let array = getCrudData();
    if (array != null){
        let html = '';
        let sno = 1;
        for (let k in array){
            html = html + `<tr><td>${sno}</td><td>${array[k]}</td><td><a href="javascript:void(0)" onclick="editData(${k})">Edit</a></td><td><a href="javascript:void(0)" onclick="deleteData(${k})">Delete</a></td></tr>`;
            sno++;
        }
        document.getElementById('root').innerHTML = html;
    }
}
function getCrudData(){
    let array = JSON.parse(localStorage.getItem('crud'));
    return array;
}
function setCrudData(array){
    localStorage.setItem('crud', JSON.stringify(array));
}
function deleteData(id){
    let array = getCrudData();
    array.splice(id,1);
    setCrudData(array);
    selectData();
}
function editData(rid){
    id = rid;
    let array = getCrudData();
    document.getElementById('name').value = array[rid];
}