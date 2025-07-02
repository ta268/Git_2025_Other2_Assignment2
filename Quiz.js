// フォーム要素を取得
  const quizForm = document.getElementById('quizForm');

  // フォームのsubmitイベントをリッスン
  quizForm.addEventListener('submit', function(event) {
    // デフォルトのフォーム送信（ページ遷移）を防ぐ
    event.preventDefault();

    // 選択されたラジオボタンの値を取得
    const selectedRadio = document.querySelector('input[name="ans"]:checked');

    if (selectedRadio) {
      const userAnswer = selectedRadio.value;
      console.log('ユーザーの回答:', userAnswer);

      // ここに回答の正誤判定などのロジックを追加
      const correctAnswer = 'プロトタイピング'; // 正解の例

      if (userAnswer === correctAnswer) {
        alert('正解です！');
      } else {
        alert('不正解です。正解は' + correctAnswer + 'です。');
      }

    } else {
      alert('回答を選択してください。');
    }
  });