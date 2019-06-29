// var inspirebutton = $('.btn-default');

// var quotetext = $('.quote');
// var quotetop = quotetext.offset().top;
// var quoteheight=quotetext.height();
// var viewheight=$(window).height();
// var scrollIt = quotetop - ((viewheight - quoteheight) / 2);

// var numlist = [];
// var numquotes = 21;
// var randnum = 1;
// var rstring="";
//
// var newCSS = {
//   'font-style':'italic',
// };
//
// inspirebutton.on('click',function()
//   {
//     randnum = Math.floor((Math.random() * numquotes) + 1)
//
//     // While loop to make sure the same quote is never repeated until all are done
//     while(numlist.indexOf(randnum)>-1)
//     {
//       randnum = Math.floor((Math.random() * numquotes) + 1)
//     }
//
//     numlist.push(randnum)
//
//     // Reset array and start over once all quotes are used
//     if (numlist.length == numquotes){
//       numlist=[]
//     }
//
//     quotetext.html(getQuote(randnum)).css(newCSS)
//     $(window).scrollTop(scrollIt)
//     // window.scrollTo($(window).width()/2,$(window).height())
//   }
// );
//
//
// function getQuote(randnum)
// {
//   switch (randnum)
//   {
//     case 1:
//       return "Character is built through adversity.";
//     case 2:
//       return "You don’t always need a plan.  Sometimes you just need to breathe, trust, let go, and see what happens.  " +
//       "(Neither this website nor its non-existent subsidiaries are liable for what happens)";
//     case 3:
//       return "Go past the max!  Reach over the top!";
//     case 4:
//       return "Get back to work!";
//     case 5:
//       return "I think I can, I think I can.";
//     case 6:
//       return "I guess if a person never quit when the going got tough, they wouldn't have anything to regret for the rest" +
//       "  of their life...  But good luck to you. I'm sure this decision won't haunt you forever.";
//     case 7:
//       return "Milk is for babies. When you grow up, you have to drink beer.";
//     case 8:
//       return "Never give up.  Trust your instincts.";
//     case 9:
//       return "You haven't failed.  You've just found 10,000 ways that won't work.";
//     case 10:
//       return "Don't let anyone ever dull your sparkle.";
//     case 11:
//       return "Bad luck and extreme misfortune will infest your pathetic soul for all eternity.";
//     case 12:
//       return "What's the worst that could happen?";
//     case 13:
//       return "If wishes were horses, we'd all be eating steak.";
//     case 14:
//       return "When I started with computers, we didn't have any fancy-schmanzy internet. We had sticks!" +
//       "  Two sticks, and a rock for the whole group.  And we had to share the rock!  Buck up, you are one very lucky person.";
//     case 15:
//       return "I just want to tell you good luck. We're all counting on you.";
//     case 16:
//       return "Nobody exists on purpose, nobody belongs anywhere, everybody's gonna die.";
//     case 17:
//       return "Just remember, win or lose… those are the two options:<br>WIN... or lose.";
//     case 18:
//       return "This website is pretty wonderful, isn't it????";
//     case 19:
//       return "If you put your mind to it, you can accomplish anything.";
//     case 20:
//       return "2:40<br>2,2,1";
//     case 21:
//       return "Inside you is the potential to make yourself better, and that is what it is to be human.  To make yourself more than you are.";
//   }
//}

var pageNumber = 1;
var totalPages = 9;
var nextButton = $('#next-button');
var prevButton = $('#prev-button');

function prevPage() {
  if (pageNumber > 1) {
    pageNumber -= 1;
    hideShowPages(pageNumber + 1, pageNumber);
    nextButton.attr("disabled", false);
    if (pageNumber === 1) {
      prevButton.attr("disabled", true);
    }
  }
}

function nextPage() {
  if (pageNumber < totalPages) {
    pageNumber += 1;
    hideShowPages(pageNumber - 1, pageNumber);
    prevButton.attr("disabled", false);
    if (pageNumber === totalPages) {
      nextButton.attr("disabled", true);
    }
  }
}

function hideShowPages(hideNumber, showNumber) {
  var hidePage = $('#slide-page-' + hideNumber);
  var showPage = $('#slide-page-' + showNumber);
  hidePage.css('display', 'none');
  showPage.css('display', 'inline');
}