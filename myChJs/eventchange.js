
const colors = "red";

const todo = document.querySelector("#list1");
const calendar = document.querySelector("#list2");
const diary = document.querySelector("#list3");
const memo = document.querySelector("#list4");


const clickTodo = document.querySelector(".clickTodo");
const clickCalendar = document.querySelector(".clickCalendar");
const clickDiary = document.querySelector(".clickDiary")
const clickMemo = document.querySelector("#memo");


const todoXbutton = document.querySelector("#todoX")


const mouseenter = {
  item: function handleTitleenter() {
    todo.style.color = "black";
  },
  item2: function handleTitleenter() {
    calendar.style.color = colors;
  },
  item3: function handleTitleenter() {
    diary.style.color = colors;
  },
  item4: function handleTitleenter() {
    memo.style.color = colors;
  }
};

const mouselevave = {
    item: function handleTitleleave() {
        todo.style.color = colors;
    },
    item2: function handleTitleleave() {
        calendar.style.color = "black";
    },
    item3: function handleTitleleave() {
        diary.style.color = "black";
    },
    item4: function handleTitleleave() {
      memo.style.color = "black";
    
    }
   
}



const mouseclick = {
  item: function handleClick() {
    clickTodo.style.display = "block"
  },
  item2: function handleClick() {
    clickCalendar.style.display = "block";
    setTimeout(function() {
      clickCalendar.style.display = "none";
    }, 1000);
  },
  item3: function handleClick() {
    clickDiary.style.display = "block"
    setTimeout(function() {
      clickDiary.style.display = "none";
    }, 1000);
  },
  item4: function handleClick() {
    clickMemo.style.display = "block"
  }
  


}


const buttonX = {
  item: function handleClick() {
    clickTodo.style.display = "none"
  }

  
}


todo.addEventListener("mouseenter", mouseenter.item);
todo.addEventListener("mouseleave", mouselevave.item);
todo.addEventListener("click", mouseclick.item);
todoXbutton.addEventListener("click", buttonX.item);

calendar.addEventListener("mouseenter", mouseenter.item2);
calendar.addEventListener("mouseleave", mouselevave.item2);
calendar.addEventListener("click", mouseclick.item2);

diary.addEventListener("mouseenter", mouseenter.item3);
diary.addEventListener("mouseleave", mouselevave.item3);
diary.addEventListener("click", mouseclick.item3);

memo.addEventListener("mouseenter", mouseenter.item4);
memo.addEventListener("mouseleave", mouselevave.item4);
memo.addEventListener("click", mouseclick.item4);







