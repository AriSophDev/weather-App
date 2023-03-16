async function alert() {
    const { value: accept } = await Swal.fire({
        title: 'Terms and conditions',
        input: 'checkbox',
        inputValue: 1,
        inputPlaceholder:
          'I agree with the terms and conditions',
        confirmButtonText:
          'Continue <i class="fa fa-arrow-right"></i>',
        inputValidator: (result) => {
          return !result && 'You need to agree with T&C'
        }
      })
      
      if (accept) {
        Swal.fire('You agreed with T&C :)')
      }
}

