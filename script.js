function calculateTotal() {
    const checkInDate = new Date(document.getElementById("check-in").value);
    const checkOutDate = new Date(document.getElementById("check-out").value);
    const pricePerNight = Number(document.getElementById("price").value);
  
    const timeDiff = Math.abs(checkOutDate - checkInDate);
    const totalDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    const totalPrice = totalDays * pricePerNight;
  
    document.getElementById("total-days").textContent = totalDays;
    document.getElementById("total-price").textContent = "Rp " + totalPrice.toLocaleString();
  }
  