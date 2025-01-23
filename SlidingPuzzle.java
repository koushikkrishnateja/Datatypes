public class SlidingPuzzle {
    public static void main(String[] args) {
        int[][] board = {
            {4, 1, 2},
            {5, 0, 3}
        };
        int moves = solvePuzzle(board);
        System.out.println("Minimum moves to solve: " + moves);
    }

    public static int solvePuzzle(int[][] board) {
        int[][] solved = {
            {1, 2, 3},
            {4, 5, 0}
        };
        int moves = 0;

        while (!isSolved(board, solved)) {
            if (board[1][1] == 0) {
                board[1][1] = board[1][0];
                board[1][0] = 0;
            } else if (board[1][0] == 0) {
                board[1][0] = board[0][0];
                board[0][0] = 0;
            } else if (board[0][0] == 0) {
                board[0][0] = board[0][1];
                board[0][1] = 0;
            } else if (board[0][1] == 0) {
                board[0][1] = board[0][2];
                board[0][2] = 0;
            } else if (board[0][2] == 0) {
                board[0][2] = board[1][2];
                board[1][2] = 0;
            }
            moves++;
        }

        return moves;
    }

    public static boolean isSolved(int[][] board, int[][] solved) {
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 3; j++) {
                if (board[i][j] != solved[i][j]) {
                    return false;
                }
            }
        }
        return true;
    }
}
