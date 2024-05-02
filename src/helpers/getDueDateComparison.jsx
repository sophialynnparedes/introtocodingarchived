export function getDueDateComparison(dueDate) {
  var baseDate = new Date(dueDate);
  var presentDate = new Date();
  presentDate.setHours(0);
  var timeDiff = baseDate.getTime() - presentDate.getTime();
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  if (diffDays < 0) {
    return "overdue";
  } else if (diffDays == 0) {
    return "today";
  } else {
    return "upcoming";
  }

  //return "overdue", "today", or "upcoming"
}
