import {AiOutlineFileText} from "react-icons/ai";
import Link from "next/link";
import {getTimeDifference} from "@/helpers/getTimeDifference";

const FileRow = (
    {hash, name, commit, timestamp, setLoading}: {hash: string, name: string, setLoading: Function, commit: string, timestamp: string}
) => {
    const finalDifference = getTimeDifference(timestamp);

    return (
        <tr>
            <td><AiOutlineFileText className={"h4 text-muted"}/></td>
            <td onClick={() => setLoading(true)}>
                <Link href={`/repository/1/${hash}`}>{name}</Link>
            </td>
            <td className={"w-50 text-center text-muted"}>{commit}</td>
            <td className={"text-muted"}>{finalDifference}</td>
        </tr>
    );
};

export default FileRow;