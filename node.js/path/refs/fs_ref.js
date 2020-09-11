const fs = require('fs')

const path= require('path')

// fs.writeFile(path.join(__dirname, 'notes', 'mynotes.txt'),
// 'Hello world', 
// err =>{
//     if (err) throw new(err)
//     console.log('Файл был создан')

// fs.appendFile(
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     ' From append File',
//     err=>{
//         if (err) throw new(err)
//         console.log('Файл был отредактирован ')
//         fs.readFile(
//             path.join(__dirname, 'notes', 'mynotes.txt'),
//             'utf-8',
//             (err, data) =>{
//         if (err) throw new (err)
//         console.log(data)
//             }
//         )
//     }
// )

// })

fs.rename(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    path.join(__dirname, 'notes', 'newNotes.txt'),
    err =>{
        if (err) throw new(err)
        console.log('Файл был переименован')
    }
)

