// auth.js

// 토큰 저장
function saveToken(token) {
  localStorage.setItem("token", token);
}

// 토큰 로드
function loadToken() {
  return localStorage.getItem("token");
}

// 회원가입 요청
function register(event) {
  event.preventDefault();
  // 입력된 값 가져오기
  const email = document.querySelector('input[name="email"]').value;
  const username = document.querySelector('input[name="username"]').value;
  const password = document.querySelector('input[name="password"]').value;

  fetch("http://localhost:8080/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      username: username,
      password: password,
    }),
  })
    .then((response) => {
      if (response.ok) {
        console.log(response);
        console.log("Registration completed");
        alert("회원가입 성공!");
        window.location.href = "/login.html";
      } else {
        throw new Error("회원가입 실패!");
      }
    })
    .catch((error) => {
      console.log(error);
      alert(error.message);
    });

  // 회원가입 API 호출
  // 성공적으로 회원가입이 완료되면 로그인 페이지로 이동
  console.log("register test");
}

// 로그아웃
function logout() {
  // 토큰 삭제
  localStorage.removeItem("token");
}

const form = document.getElementById("registerForm");

// 폼 제출 시 handleFormSubmit 함수 실행
form.addEventListener("submit", register);
