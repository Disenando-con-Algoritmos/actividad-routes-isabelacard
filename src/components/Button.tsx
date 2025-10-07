export default function Button({ texto }: { texto: string }) {
    return (
        <div id="button" className="flex flex-col items-center justify-center bg-pink-200 text-pink-600 font-bold pt-2">
            <button type="submit" className="btn btn-soft btn-secondary bg-white border-0 w-40">
                {texto}
            </button>
        </div>
    );
}
