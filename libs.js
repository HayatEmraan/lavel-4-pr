const setLocal = (x, y) => {
    const sx = document.getElementById(x).value;
    localStorage.setItem(y, sx);
};
const addName = () => {
    setLocal("name-field", "name");
};
const deleteName = () => {
    localStorage.removeItem('name');
};
const addEmail = () => {
    setLocal("email-field", "email");
};
const deleteEmail = () => {
  localStorage.removeItem("email");
};
const addMessage = () => {
  setLocal("message-field", "message");
};
const deleteMessage = () => {
  localStorage.removeItem("message");
};
const resetAll = () => {
    localStorage.clear();
};
const getData = x => {
    const sx = document.getElementById(x).value;
    return sx;
}
const sendAll = () => {
    let i = {};
    const x = getData("name-field");
    const y = getData('email-field');
    const z = getData('message-field');
    i.name = x;
    i.email = y;
    i.message = z;
    const convertor = JSON.stringify(i);
    localStorage.setItem("snd", convertor);
};