import tw, { styled } from "twin.macro"

export const FormWrap = styled.form`

    input{
        ${tw`
            block 
            border border-lightgray rounded-md
            w-full py-3 px-5 mb-6
        `}

        &::placeholder { 
            ${tw`text-lightgray ml-4 text-sm`}
        }

        &[type="submit"]{
            ${tw`text-white bg-black text-2xl w-min px-8 py-3 border-none ml-auto cursor-pointer`}
        }
    }

    fieldset{

        ${tw`
            block 
            border border-lightgray rounded
            w-full p-2 mb-6
        `}

        margin-inline-start: 2px;
        margin-inline-end: 2px;
        padding-block-start: 0.35em;
        padding-inline-start: 0.75em;
        padding-inline-end: 0.75em;
        padding-block-end: 0.625em;
        min-inline-size: min-content;
        border-width: 1px;
        border-image: initial;

        legend{
            ${tw`text-lightgray text-sm px-2`}
        }

        select{
            ${tw`w-full text-lg text-black`}
        }
    }
`