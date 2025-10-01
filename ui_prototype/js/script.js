/* Tagihin App JavaScript
 * Low Fidelity Prototype
 */

document.addEventListener('DOMContentLoaded', function() {
    // Toggle password visibility
    const togglePasswordButtons = document.querySelectorAll('.toggle-password');
    if (togglePasswordButtons) {
        togglePasswordButtons.forEach(button => {
            button.addEventListener('click', function() {
                const passwordInput = this.previousElementSibling;
                if (passwordInput.type === 'password') {
                    passwordInput.type = 'text';
                    this.innerHTML = '<i class="fas fa-eye-slash"></i>';
                } else {
                    passwordInput.type = 'password';
                    this.innerHTML = '<i class="fas fa-eye"></i>';
                }
            });
        });
    }

    // Filter chips functionality
    const filterChips = document.querySelectorAll('.filter-chip');
    if (filterChips) {
        filterChips.forEach(chip => {
            chip.addEventListener('click', function() {
                // Remove active class from all chips
                filterChips.forEach(c => c.classList.remove('active'));
                // Add active class to clicked chip
                this.classList.add('active');
            });
        });
    }

    // Customer item click navigation
    const customerItems = document.querySelectorAll('.customer-item');
    if (customerItems) {
        customerItems.forEach(item => {
            item.addEventListener('click', function() {
                window.location.href = 'customer-detail.html';
            });
        });
    }

    // Invoice item click navigation
    const invoiceItems = document.querySelectorAll('.invoice-item');
    if (invoiceItems) {
        invoiceItems.forEach(item => {
            item.addEventListener('click', function() {
                window.location.href = 'invoice-detail.html';
            });
        });
    }

    // Add customer button redirect
    const addCustomerBtn = document.getElementById('add-customer-btn');
    if (addCustomerBtn) {
        addCustomerBtn.addEventListener('click', function() {
            // In a real app, this would open a form or modal
            alert('Fitur tambah pelanggan akan tersedia pada versi lengkap aplikasi');
        });
    }

    // Add invoice button redirect
    const addInvoiceBtn = document.getElementById('add-invoice-btn');
    if (addInvoiceBtn) {
        addInvoiceBtn.addEventListener('click', function() {
            window.location.href = 'add-invoice.html';
        });
    }

    // Add payment button
    const addPaymentBtn = document.getElementById('add-payment-btn');
    if (addPaymentBtn) {
        addPaymentBtn.addEventListener('click', function() {
            // In a real app, this would open a form or modal
            alert('Fitur tambah pembayaran akan tersedia pada versi lengkap aplikasi');
        });
    }

    // Settings items navigation
    const settingsItems = document.querySelectorAll('.settings-item:not(.logout)');
    if (settingsItems) {
        settingsItems.forEach(item => {
            item.addEventListener('click', function() {
                // In a real app, this would navigate to specific settings pages
                alert('Pengaturan detail akan tersedia pada versi lengkap aplikasi');
            });
        });
    }

    // Logout functionality
    const logoutItem = document.querySelector('.settings-item.logout');
    if (logoutItem) {
        logoutItem.addEventListener('click', function() {
            if (confirm('Apakah Anda yakin ingin keluar?')) {
                window.location.href = 'login.html';
            }
        });
    }

    // Calculate invoice item totals in add-invoice.html
    const calculateItemTotals = function() {
        const invoiceItems = document.querySelectorAll('.invoice-item-form');
        let grandTotal = 0;
        
        if (invoiceItems) {
            invoiceItems.forEach((item, index) => {
                const qty = parseInt(document.getElementById(`item-qty-${index + 1}`).value) || 0;
                const price = parseInt(document.getElementById(`item-price-${index + 1}`).value) || 0;
                const total = qty * price;
                
                const totalInput = document.getElementById(`item-total-${index + 1}`);
                if (totalInput) {
                    totalInput.value = total;
                }
                
                grandTotal += total;
            });
            
            const totalAmountDisplay = document.querySelector('.total-amount');
            if (totalAmountDisplay) {
                totalAmountDisplay.textContent = `Rp ${grandTotal.toLocaleString('id-ID')}`;
            }
        }
    };

    // Add event listeners to quantity and price inputs
    const qtyInputs = document.querySelectorAll('input[id^="item-qty-"]');
    const priceInputs = document.querySelectorAll('input[id^="item-price-"]');
    
    if (qtyInputs && priceInputs) {
        qtyInputs.forEach(input => {
            input.addEventListener('input', calculateItemTotals);
        });
        
        priceInputs.forEach(input => {
            input.addEventListener('input', calculateItemTotals);
        });
        
        // Initial calculation
        calculateItemTotals();
    }

    // Add item button functionality
    const addItemBtn = document.getElementById('add-item-btn');
    if (addItemBtn) {
        addItemBtn.addEventListener('click', function() {
            alert('Fitur tambah barang akan tersedia pada versi lengkap aplikasi');
        });
    }

    // Delete item buttons
    const deleteItemBtns = document.querySelectorAll('.delete-item');
    if (deleteItemBtns) {
        deleteItemBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                alert('Fitur hapus barang akan tersedia pada versi lengkap aplikasi');
            });
        });
    }

    // Add payment action on invoice detail
    const paymentAction = document.querySelector('.action-btn.primary');
    if (paymentAction) {
        paymentAction.addEventListener('click', function() {
            alert('Fitur pencatatan pembayaran akan tersedia pada versi lengkap aplikasi');
        });
    }

    // WhatsApp reminder action
    const whatsappAction = document.querySelector('.action-btn:has(i.fab.fa-whatsapp)');
    if (whatsappAction) {
        whatsappAction.addEventListener('click', function() {
            alert('Fitur pengiriman pengingat WhatsApp akan tersedia pada versi lengkap aplikasi');
        });
    }
});