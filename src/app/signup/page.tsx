import Input from '@/components/Input'
import React from 'react'
import Button from '@/components/Button'

export default function Signup() {
    return (
        <div className='flex flex-col items-center'>
            <div className='w-1/2'>
                <Input label='nome' id='1' type='text' />
                <Input label='email' id='alek' type='email' />
                <Input label='senha' id='password' type='password' />
                <Input label='cpf' id='cpf' type='text' />
            </div>
            <div className='text-center'>
                <p>Seu Rosto</p>
                <div className='w-80 h-80 bg-dark my-5'></div>
            </div>
            <Button>Cadastrar</Button>
        </div>
    )
}
