import { renderSessionForm } from "../session-form-page";

export default async function AddSession(props: {
  params: { eventSlug: string };
}) {
  return renderSessionForm(props);
}
