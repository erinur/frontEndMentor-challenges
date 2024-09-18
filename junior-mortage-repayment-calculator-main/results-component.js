export const errorMsg = 
  `
  <span class="error-msg">This field is required</span>
  `

export const emptyResult =
  `
  <div class="empty-result">
    <img src="./assets/images/illustration-empty.svg" alt="#">
    <h3>Results shown here</h3>
    <p>Complete the form and click “calculate repayments” to see what 
    your monthly repayments would be.</p>
  </div>
  `

export const completeResult =
  `
  <div class="complete-result">
    <h3 class="h3-result">Your results</h3>
    <p class="p-result">Your results are shown below based on the information you provided. 
      To adjust the results, edit the form and click “calculate repayments” again.</p>
    <div class="monthly-repayments">
      <p class="p-result">Your monthly repayments</p>
      <monthlyPayment></monthlyPayment>
      <hr>
      <p class="p-result">Total you'll repay over the term</p>
      <totalPayment></totalPayment>
    </div>
  </div>
  `

  



      
