function searchShop(event) {
    event.preventDefault(); // Prevent form from submitting
    const searchTerm = document.getElementById("searchInput").value;
    alert(`Вы пытались найти "${searchTerm}", но поиск пока не доступен.`);
    return false;
}