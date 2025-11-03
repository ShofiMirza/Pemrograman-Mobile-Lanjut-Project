// Tab Navigation
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        
        // Remove active class from all tabs and buttons
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
        
        // Add active class to clicked button and corresponding tab
        button.classList.add('active');
        document.getElementById(tabId).classList.add('active');
        
        // Hide modal if open
        hideModal();
    });
});

// Modal Management
let currentScreen = null;

function showScreen(screenId) {
    const modal = document.getElementById('modal-container');
    const screen = document.getElementById(screenId);
    
    if (screen) {
        // Hide all modal contents
        document.querySelectorAll('.modal-content').forEach(content => {
            content.classList.remove('active');
        });
        
        // Show modal and specific screen
        modal.classList.add('active');
        screen.classList.add('active');
        currentScreen = screenId;
    }
}

function hideModal() {
    const modal = document.getElementById('modal-container');
    modal.classList.remove('active');
    
    // Hide all modal contents
    document.querySelectorAll('.modal-content').forEach(content => {
        content.classList.remove('active');
    });
    
    currentScreen = null;
}

// Close modal when clicking outside
document.getElementById('modal-container').addEventListener('click', (e) => {
    if (e.target.id === 'modal-container') {
        hideModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && currentScreen) {
        hideModal();
    }
});

// Form Submit Handlers (Simulated)
document.querySelectorAll('.btn-primary').forEach(button => {
    if (button.textContent.includes('Simpan')) {
        button.addEventListener('click', (e) => {
            if (button.closest('.modal-content')) {
                e.preventDefault();
                alert('Data berhasil disimpan! (Simulasi)');
                hideModal();
            }
        });
    }
});

// WhatsApp Button Handler
document.querySelectorAll('.btn-whatsapp').forEach(button => {
    button.addEventListener('click', () => {
        alert('Membuka WhatsApp untuk mengirim pengingat... (Simulasi)');
    });
});

// Settings Item Click Handler
document.querySelectorAll('.settings-item').forEach(item => {
    item.addEventListener('click', () => {
        const text = item.querySelector('.box-text').textContent;
        if (text.includes('Logout')) {
            if (confirm('Yakin ingin logout?')) {
                alert('Logout berhasil! (Simulasi)');
            }
        } else {
            alert(`Membuka ${text}... (Simulasi)`);
        }
    });
});

// Radio Button Simulation
document.querySelectorAll('.radio-item').forEach(item => {
    item.addEventListener('click', () => {
        // Remove selection from all radio items in the same group
        const radioGroup = item.closest('.radio-group');
        radioGroup.querySelectorAll('.radio-circle').forEach(circle => {
            circle.style.background = 'white';
        });
        
        // Select clicked radio
        const circle = item.querySelector('.radio-circle');
        circle.style.background = '#3498db';
    });
});

// Upload Box Interaction
document.querySelectorAll('.upload-box').forEach(box => {
    box.addEventListener('click', () => {
        alert('Membuka galeri untuk memilih foto... (Simulasi)');
    });
});

// Add some interactive feedback
document.querySelectorAll('.list-item').forEach(item => {
    item.addEventListener('mousedown', () => {
        item.style.transform = 'scale(0.98)';
    });
    
    item.addEventListener('mouseup', () => {
        item.style.transform = 'scale(1)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});

// Console info
console.log('Low Fidelity Wireframe - Aplikasi Tagihin');
console.log('Framework: HTML, CSS, JavaScript');
console.log('Berdasarkan: Dokumen SRS - Muhammad Shofi Mirza (221240001244)');
console.log('');
console.log('Fitur yang ditampilkan:');
console.log('1. Manajemen Pelanggan');
console.log('2. Pencatatan Transaksi Kredit');
console.log('3. Input Pembayaran Cicilan');
console.log('4. Pengingat WhatsApp');
console.log('5. Riwayat Pembayaran Global');
console.log('6. Laporan Ringkas');
