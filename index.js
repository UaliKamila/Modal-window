const fruits = [
    {id: 1, title: 'Яблоки', price: 20, img:
     'https://images.pexels.com/photos/1510392/pexels-photo-1510392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {id: 2, title: 'Апельсины', price: 30, img:
     'https://images.pexels.com/photos/3804878/pexels-photo-3804878.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
    {id: 3, title: 'Манго', price: 40, img: 'https://images.pexels.com/photos/5875696/pexels-photo-5875696.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
]
const modal = $.modal({
    title: 'Kamila Modal',
    closable: true,
    content: `
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem ipsum dolor sit.</p>
    `,
    width: '400px',
    footerButtons: [
        {text: 'Ok', type: 'primary', handler() {
            console.log('Primary btn clicked')
                modal.close()
            }},
        {text: 'Cancel', type: 'danger', handler() {
            console.log('Danger btn clicked')
                modal.close()
            }}
    ]
})