public class SimpleVowelWords {
    // Method to check if a word starts and ends with a vowel
    public static boolean isVowelWord(String word) {
        char first = word.charAt(0);
        char last = word.charAt(word.length() - 1);
        return isVowel(first) && isVowel(last);
    }

    // Method to check if a character is a vowel
    public static boolean isVowel(char ch) {
        ch = Character.toLowerCase(ch);
        return ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u';
    }

    public static void main(String[] args) {
        // Array of words
        String[] words = {"aba", "bcb", "ece", "aa", "e"};

        
        int[][] queries = {{0, 2}, {1, 4}, {0, 4}};

       
        int[] results = new int[queries.length];

      
        for (int q = 0; q < queries.length; q++) {
            int start = queries[q][0];
            int end = queries[q][1];
            int count = 0;

            // Count vowel words in the range [start, end]
            for (int i = start; i <= end; i++) {
                if (isVowelWord(words[i])) {
                    count++;
                }
            }

            
            results[q] = count;
        }

        
        for (int result : results) {
            System.out.println(result);
        }
    }
}
