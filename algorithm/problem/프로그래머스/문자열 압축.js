<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script type="module">
      function solution(s) {
        let answer = Number.MAX_SAFE_INTEGER;
        let start = 1;

        if (s.length === 1) return (answer = 1);
        while (start !== s.length) {
          let cmp = [];

          for (let i = 0; i < s.length; i += start) {
            cmp.push(s.slice(i, i + start));
          }

          let tmp = [];
          let count = 0;
          for (let i = 0; i < cmp.length; i++) {
            if (cmp[i] === cmp[i + 1]) {
              ++count;
            } else if (count > 0) {
              tmp += count + 1 + cmp[i - 1];
              count = 0;
            } else {
              tmp += cmp[i];
            }
          }

          if (tmp.length > 0 && answer > tmp.length) {
            answer = tmp.length;
          }
          start++;
        }
        return answer;
      }
      console.log(solution("abcabcabcabcdededededede"));
    </script>
  </body>
</html>
