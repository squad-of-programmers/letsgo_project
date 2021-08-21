const main_wrapp = document.querySelector(".main_wrapp");
const create_post_form = document.forms.create_post;

//смена аватара
const change_avatar = document.querySelector(".change_avatar");
const maxi_avatar = document.getElementById("maxi_avatar");
const mini_avatar = document.getElementById("mini_avatar");
change_avatar?.addEventListener("change", async () => {
  const formData = new FormData();
  formData.append("file", change_avatar.files[0]);
  const response = await fetch("/user/changeavatar", {
    method: "POST",
    body: formData,
  });
  const user = await response.json();
  console.log(maxi_avatar);
  console.log(user.avatar);
  maxi_avatar.setAttribute("src", user.avatar);
  mini_avatar.setAttribute("src", user.avatar);
});
