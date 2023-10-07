const board = document.getElementById('board');

// 創建19x19的棋盤
for (let i = 0; i < 19; i++) {
    for (let j = 0; j < 19; j++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.dataset.row = i;
        cell.dataset.col = j;
        board.appendChild(cell);
    }
}

board.addEventListener('click', (event) => {
    const cell = event.target;
    if (cell.classList.contains('cell')) {
        // 在單元格中放置黑子或白子
        placeStone(cell);
    }
});

function placeStone(cell) {
    const stone = document.createElement('div');
    stone.className = 'stone';
    if (cell.querySelectorAll('.stone').length === 0) {
        cell.appendChild(stone);
    }
}
