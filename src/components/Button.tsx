export default function Button({ texto }: { texto: string }) {
    return (
        <div id="button" className="flex flex-col items-center justify-center bg-pink-200 text-pink-600 font-bold pt-2">
            <button className="btn btn-soft btn-secondary bg-white border-0">{texto}</button>
        </div>
    );
}
