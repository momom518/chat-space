$(function(){

  function appendUsers(user){
    let html =  `
                  <div class="ChatMember clearfix">
                    <p class="ChatMember__name">${user.name}</p>
                    <div class="ChatMember__add ChatMember__button" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
                  </div>
                `;
    $("#UserSearchResult").append(html);

  }
  function appendNoUser(){
    let html = `
                  <div class="ChatMember clearfix">
                     <p class="ChatMember__name">ユーザーが見つかりません</p>
                  </div>
                `;
    $("#UserSearchResult").append(html);
  };

  function appendMember(id,name){
     let html =`
                 <div class="ChatMember">
                   <p class="ChatMember__name">${name}</p>
                     <input name="group[user_ids][]" type="hidden" value="${id}" />
                   <div class="ChatMember__remove ChatMember__button">削除</div>
                 </div>
                 `
     $(".ChatMembers").append(html);
  };

  $("#UserSearch__field").on("keyup",function(){
    let input = $("#UserSearch__field").val();
    $.ajax({
      type:'GET',
      url:'/users',
      data:{keyword: input},
      detaType: 'json'
    })
    .done(function(users){
      $("#UserSearchResult").empty();
      if(input.length !== 0){
        users.forEach(function(user){
          appendUsers(user);
        })
      }else if(input.length == 0){
        return false;
      }else{
        appendNoUser();
      }
    })
     .fail(function(){
       alert("ユーザーが表示できません");
     });
  });
    $(document).on("click",".ChatMember__add",function(){
      let user_id = $(this).attr('data-user-id'); 
      let user_name = $(this).attr('data-user-name');
      $(this).parent().remove();
      appendMember(user_id,user_name);
    });
    $(document).on("click",".ChatMember__remove",function(){
      $(this).parent().remove();
    });
});