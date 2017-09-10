import * as Board from './board.js';

export function Iota1(e) {
    var board = new Board.Board(e, -2.5, 3.5, -2.5, 2.5, 100);

    // input
    board.point([0, 0], 'A', {}, Board.FLAG_INIT);
    board.point([0.8, 0], 'A2', {}, Board.FLAG_INIT);
    board.point([-1.57, -0.1], 'B', {}, Board.FLAG_INIT);
    board.circle(['A', 'A2'], 'C1', {}, Board.FLAG_INIT);

    // steps
    board.line(['A', 'B'], 'L1');
    board.circle(['A', 'B'], 'C2');
    board.intersection(['C1', 'L1', 0], 'C');
    board.circle(['C', 'B'], 'C3');
    board.otherintersection(['C2', 'L1', 'B'], 'D');
    board.otherintersection(['C3', 'L1', 'B'], 'E');
    board.circle(['D', 'E'], 'C4');
    board.intersection(['C2', 'C4', 0], 'F');
    board.line(['B', 'F'], 'L2');

    // solution
    board.line(['B', 'F'], '', {straightFirst: false}, Board.FLAG_FINAL); 

    board.renderAll();
}

export function Iota2_L(e) {
    var board = new Board.Board(e, -3.5, 2.5, -2, 2, 100);

    // input
    board.point([0, 0], 'A', {}, Board.FLAG_INIT);
    board.point([0, 1], 'B', {}, Board.FLAG_INIT);
    board.point([-1.7, 0], 'C', {}, Board.FLAG_INIT);
    board.point([-1.7, 0.33], 'D', {}, Board.FLAG_INIT);
    board.circle(['A', 'B'], 'C1', {}, Board.FLAG_INIT);
    board.circle(['C', 'D'], 'C2', {}, Board.FLAG_INIT);

    // steps
    board.circle(['C', 'A'], 'C3');
    board.line(['C', 'A'], 'L1');
    board.intersection(['C2', 'L1', 0], 'E');
    board.intersection(['C2', 'L1', 1], 'F');
    board.line(['E', 'F'], 'L2', {visible: false}, Board.FLAG_SKIP);
    board.intersection(['C1', 'L1', 0], 'G');
    board.intersection(['C1', 'L1', 1], 'H');
    board.circle(['G', 'L2'], 'C4');
    board.intersection(['C4', 'L1', 1], 'I');
    board.line(['H', 'I'], 'L3', {visible: false}, Board.FLAG_SKIP);
    board.circle(['A', 'L3'], 'C5');
    board.intersection(['C3', 'C5', 1], 'J');
    board.line(['A', 'J'], 'L4');

    // solution
    board.intersection(['C1', 'L4', 0], 'K');
    board.perpendicular(['L4', 'K'], '', {}, Board.FLAG_FINAL);

    board.renderAll();
}

export function Iota2_E(e) {
    var board = new Board.Board(e, -3.5, 2.5, -2, 2, 100);

    // input
    board.point([0, 0], 'A', {}, Board.FLAG_INIT);
    board.point([0, 1], 'B', {}, Board.FLAG_INIT);
    board.point([-1.7, 0], 'C', {}, Board.FLAG_INIT);
    board.point([-1.7, 0.33], 'D', {}, Board.FLAG_INIT);
    board.circle(['A', 'B'], 'C1', {}, Board.FLAG_INIT);
    board.circle(['C', 'D'], 'C2', {}, Board.FLAG_INIT);

    // steps
    board.line(['A', 'C'], 'L1');
    board.intersection(['C1', 'L1', 1], 'E');
    board.intersection(['C2', 'L1', 1], 'F');
    board.circle(['E', 'A'], 'C3');
    board.circle(['F', 'C'], 'C4');
    board.intersection(['C1', 'C3', 0], 'G');
    board.intersection(['C2', 'C4', 0], 'H');
    board.line(['G', 'H'], 'L2');
    board.intersection(['L1', 'L2'], 'I');
    board.circle(['C', 'I'], 'C5');
    board.intersection(['C2', 'L1', 0], 'J');
    board.circle(['J', 'I'], 'C6');
    board.otherintersection(['C5', 'L1', 'I'], 'K');
    board.otherintersection(['C6', 'L1', 'I'], 'L');
    board.circle(['K', 'L'], 'C7');
    board.intersection(['C5', 'C7', 1], 'M');

    // solution
    board.line(['I', 'M'], '', {}, Board.FLAG_FINAL);

    board.renderAll();
}

export function Iota3_L(e) {
    var board = new Board.Board(e, -3, 2.5, -2, 2, 100);

    // input
    board.point([0.4, 0], 'A', {}, Board.FLAG_INIT);
    board.point([0.4, 0.6], 'B', {}, Board.FLAG_INIT);
    board.point([-1, 0], 'C', {}, Board.FLAG_INIT);
    board.point([-1, 0.33], 'D', {}, Board.FLAG_INIT);
    board.circle(['A', 'B'], 'C1', {}, Board.FLAG_INIT);
    board.circle(['C', 'D'], 'C2', {}, Board.FLAG_INIT);

    // steps
    board.circle(['C', 'A'], 'C3');
    board.line(['C', 'A'], 'L1');
    board.intersection(['C2', 'L1', 0], 'E');
    board.intersection(['C2', 'L1', 1], 'F');
    board.line(['E', 'F'], 'L2', {visible: false}, Board.FLAG_SKIP);
    board.intersection(['C1', 'L1', 0], 'G');
    board.intersection(['C1', 'L1', 1], 'H');
    board.circle(['G', 'L2'], 'C4');
    board.intersection(['C4', 'L1', 0], 'I');
    board.line(['H', 'I'], 'L3', {visible: false}, Board.FLAG_SKIP);
    board.circle(['A', 'L3'], 'C5');
    board.intersection(['C3', 'C5', 1], 'J');
    board.line(['A', 'J'], 'L4');

    // solution
    board.intersection(['C1', 'L4', 0], 'K');
    board.perpendicular(['L4', 'K'], '', {}, Board.FLAG_FINAL);

    board.renderAll();
}

export function Iota3_E(e) {
    var board = new Board.Board(e, -3.5, 2.5, -2, 2, 100);

    // input
    board.point([0.5, 0], 'A', {}, Board.FLAG_INIT);
    board.point([0.5, 1], 'B', {}, Board.FLAG_INIT);
    board.point([-1.7, 0], 'C', {}, Board.FLAG_INIT);
    board.point([-1.7, 0.33], 'D', {}, Board.FLAG_INIT);
    board.circle(['A', 'B'], 'C1', {}, Board.FLAG_INIT);
    board.circle(['C', 'D'], 'C2', {}, Board.FLAG_INIT);

    // steps
    board.line(['A', 'C'], 'L1');
    board.intersection(['C1', 'L1', 1], 'E');
    board.intersection(['C2', 'L1', 0], 'F');
    board.circle(['E', 'A'], 'C3');
    board.circle(['F', 'C'], 'C4');
    board.intersection(['C1', 'C3', 0], 'G');
    board.intersection(['C2', 'C4', 0], 'H');
    board.line(['G', 'H'], 'L2');
    board.intersection(['L1', 'L2'], 'I');
    board.circle(['C', 'I'], 'C5');
    board.intersection(['C2', 'L1', 0], 'J');
    board.circle(['J', 'I'], 'C6');
    board.otherintersection(['C5', 'L1', 'I'], 'K');
    board.otherintersection(['C6', 'L1', 'I'], 'L');
    board.circle(['K', 'L'], 'C7');
    board.intersection(['C5', 'C7', 1], 'M');

    // solution
    board.line(['I', 'M'], '', {}, Board.FLAG_FINAL);

    board.renderAll();
}

export function Iota4(e) {
    var board = new Board.Board(e, -2.5, 2.5, -2, 2, 100);

    // input
    board.point([0, 0], 'A', {}, Board.FLAG_INIT);
    board.point([-0.8, 0.6], 'B', {}, Board.FLAG_INIT);
    board.point([-1.3, -0.1], 'C', {}, Board.FLAG_INIT);
    board.segment(['B', 'C'], 'L1', {}, Board.FLAG_INIT);

    // steps
    board.circle(['A', 'B'], 'C1');
    board.line(['A', 'B'], 'L2');
    board.perpendicular(['L2', 'A'], 'L3');
    board.intersection(['C1', 'L3', 1], 'D');
    board.perpendicular(['L1', 'D'], 'L4');
    board.circle(['A', 'C'], 'C2');
    board.intersection(['C2', 'L4', 1], 'E');
    
    // solution
    board.segment(['D', 'E'], '', {}, Board.FLAG_FINAL);

    board.renderAll();
}

export function Iota5(e) {
    var board = new Board.Board(e, -3, 1.5, -2, 2, 100);

    // input
    board.point([0, 0], 'A', {}, Board.FLAG_INIT);
    board.point([-1.3, 0.4], 'B', {}, Board.FLAG_INIT);
    board.point([-0.13, -0.97], 'C', {}, Board.FLAG_INIT);
    board.segment(['B', 'C'], 'L1', {}, Board.FLAG_INIT);

    // steps
    board.circle(['A', 'B'], 'C1');
    board.circle(['B', 'A'], 'C2');
    board.circle(['C', 'A'], 'C3');
    board.intersection(['C1', 'C2', 0], 'D');
    board.otherintersection(['C2', 'C3', 'A'], 'E');
    board.line(['D', 'E'], 'L2');
    board.otherintersection(['L2', 'C3', 'E'], 'F');
    
    // solution
    board.segment(['D', 'F'], '', {}, Board.FLAG_FINAL);

    board.renderAll();
}

export function Iota6_L(e) {
    var board = new Board.Board(e, -2, 3, -2, 2, 100);

    // input
    board.point([-1, 0], 'A', {}, Board.FLAG_INIT);
    board.point([1, 0], 'B', {}, Board.FLAG_INIT);
    board.segment(['A', 'B'], 'L1', {}, Board.FLAG_INIT);

    // steps
    board.point([-1.2, -0.8], 'C');
    board.circle(['A', 'C'], 'C1');
    board.line(['A', 'C'], 'L2');
    board.otherintersection(['C1', 'L2', 'C'], 'D');
    board.line(['C', 'D'], 'L3', {visible: false}, Board.FLAG_SKIP);
    board.circle(['B', 'L3'], 'C2');
    board.intersection(['C1', 'C2', 1], 'E');
    board.angleBisector(['A', 'E', 'B'], 'L4');
    board.intersection(['L1', 'L4'], 'F');
    board.circle(['F', 'A'], 'C3');
    board.otherintersection(['L1', 'C3', 'A'], 'G');
    
    // solution
    board.point(['X(A)', 'Y(A)'], 'A2', {}, Board.FLAG_FINAL);
    board.point(['X(B)', 'Y(B)'], 'B2', {}, Board.FLAG_FINAL);
    board.point(['X(F)', 'Y(F)'], 'F2', {}, Board.FLAG_FINAL);
    board.point(['X(G)', 'Y(G)'], 'G2', {}, Board.FLAG_FINAL);
    board.segment(['A', 'B'], '', {}, Board.FLAG_FINAL);

    board.renderAll();
}

export function Iota6_E(e) {
    var board = new Board.Board(e, -2, 3, -2, 1.5, 100);

    // input
    board.point([0, 0], 'A', {}, Board.FLAG_INIT);
    board.point([1, 0], 'B', {}, Board.FLAG_INIT);
    board.segment(['A', 'B'], 'L1', {}, Board.FLAG_INIT);

    // steps
    board.circle(['A', 'B'], 'C1');
    board.circle(['B', 'A'], 'C2');
    board.intersection(['C1', 'C2', 0], 'C');
    board.circle(['C', 'A'], 'C3');
    board.intersection(['C1', 'C2', 1], 'D');
    board.line(['B', 'C'], 'L2');
    board.otherintersection(['C3', 'L2', 'B'], 'E');
    board.line(['D', 'E'], 'L3');
    board.intersection(['L1', 'L3'], 'F');
    board.circle(['F', 'A'], 'C4');
    board.otherintersection(['L1', 'C4', 'A'], 'G');
    
    // solution
    board.point(['X(A)', 'Y(A)'], 'A2', {}, Board.FLAG_FINAL);
    board.point(['X(B)', 'Y(B)'], 'A2', {}, Board.FLAG_FINAL);
    board.point(['X(F)', 'Y(F)'], 'B2', {}, Board.FLAG_FINAL);
    board.point(['X(G)', 'Y(G)'], 'G2', {}, Board.FLAG_FINAL);
    board.segment(['A', 'B'], '', {}, Board.FLAG_FINAL);

    board.renderAll();
}
