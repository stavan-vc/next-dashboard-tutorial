interface ErrorProps {
  id: string;
  errors: string[] | undefined;
}

const Error: React.FC<ErrorProps> = ({ id, errors }) => {
  return (
    <div id={id} aria-live="polite" aria-atomic="true">
      {errors &&
        errors.map((error: string) => (
          <p className="mt-2 text-sm text-red-500" key={error}>
            {error}
          </p>
        ))}
    </div>
  );
};

export default Error;
