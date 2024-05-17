---
nextnote: 
author: Giacomo
authorlink: https://github.com/gamberoillecito
---
# Quantum gates


>[!note] See also the corresponding [[Qubit Electronics/01_Introduction/Introduction|notes]] for the Qubit Electronics course

## NOT

The NOT gate is represented by the matrix 

$$
X \equiv \begin{bmatrix}
0 & 1 \\
1 & 0
\end{bmatrix}
$$

and acts on a state $\psi = \alpha \ket{0} + \beta \ket{1}$ as follows: 

$$
X \psi = X \begin{bmatrix}
\alpha \\ \beta
\end{bmatrix} = \begin{bmatrix}
\beta \\ \alpha
\end{bmatrix}
$$

it is easy to see that the effect of the gate is the expected one, which is to say flip the initial state.

## Constraints for quantum gates

From the example above we saw that a gate acting on a single qubit can be represented by a two by two matrix. Due to the fact that the state after the application of the gate **must remain normalized**, the matrix must be chosen in such a way that if $|\alpha|^{2} + |b|^{2} = 1$ then $|\alpha'|^{2} + |\beta'|^{2} = 1$. Where $\psi' = \alpha' \ket{0} + \beta \ket{1}$ is the state after the gate.

It turns out that for this condition to be satisfied the matrix $U$ that describes the transformation must be **unitary**, i.e. $U^{\dagger} U = \mathbb{I}$. This is the **only** constraint on quantum gates.

## Z gate

The $Z$ gate is described by the following matrix 

$$
Z \equiv \begin{bmatrix}
1 & 0 \\ 0 & -1
\end{bmatrix}
$$

The effect of this gate is to leave $\ket{0}$ unchanged and flip the sign of $\ket{1}$ to give $- \ket{1}$.

## Hadamard gate

The Hadamard is described by 

$$
H \equiv \frac{1}{\sqrt{ 2 }} \begin{bmatrix}
1 & 1 \\ 1 & -1
\end{bmatrix}
$$

and can be thought as being the "*square root of the NOT gate*" in the sense that it turns $\ket{0}$ into $(\ket{0} + \ket{1}) /\sqrt{ 2 }$, which is half way between $\ket{0}$ and $\ket{1}$ (first column of $H$). The same thing is done for $\ket{1}$, which is turned into $(\ket{0} - \ket{1}) /\sqrt{ 2 }$.

It is important to notice that $H^{2} \neq NOT$, in fact $H^{2} = \mathbb{I}$.

Looking at the effect of the Hadamard on the Bloch sphere this corresponds to a rotation about the $\hat{y}$ axis by $90^{\circ}$, followed by a rotation about the $\hat{x}$ axis by $90^{\circ}$.

![[Qubit Electronics/01_Introduction/Introduction#^37b221|Introduction]]

## Controlled NOT (XOR)

This gate has two input qubits, known as the control qubit and the target qubit, respectively. The circuit representation for the CNOT is shown in the image below; the top line represents the control qubit, while the bottom line represents the target qubit. The action of the gate may be described as follows. If the control qubit is set to 0, then the target qubit is left alone. If the control qubit is set to 1, then the target qubit is flipped.

![[CNOT.png|300]]

The CNOT gate is particularly important because any multiple qubit logic gate may be composed from and single qubit gates.


## Controlled operator C-U

Similarly to what happened for the CNOT, we can extend the concept of "control" to any other unitary operator $U$. In Dirac notation, the controlled version of the operator $U$ can be written as: 

$$
\ket{c} \ket{t} \to \ket{c} U^{c} \ket{t} 
$$

![[controlled operator.png|300]]

In computational basis, the matrix representation of the C-U operator is given by 

$$
U^{c} = \begin{bmatrix}
1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & a & b  \\
0 & 0 & c & d
\end{bmatrix}
$$

with 

$$
U = \begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
$$

# No-cloning theorem

The no-cloning theorem state that it is not possible to create a copy of an **unknown** quantum state. This statement can be proved using the following reasoning.

Suppose we have a copying machine with two slots. The machine starts with a pure quantum state $\ket{\psi}$ in the *data slot* that we want to copy to the *target slot* which, initially, is in the pure state $\ket{s}$. At the beginning of the experiment the machine is in the state 

$$
\ket{p} \otimes  \ket{s} 
$$

If the copying procedure can be described by some unitary evolution $U$, we can write the following: 

$$
\ket{\psi}  \otimes \ket{s} \overset{ U }{ \longrightarrow } U\big( \ket{\psi} \otimes \ket{s}  \big) = \ket{\psi} \otimes \ket{\psi} 
$$

If we apply the copying procedure to two particular pure states $\ket{\psi}$ and $\ket{\varphi}$ we would have 

$$
\displaylines{
U(\ket{\psi} \otimes \ket{s} ) = \ket{\psi} \otimes \ket{\psi} \\
U(\ket{\varphi} \otimes \ket{s} ) = \ket{\varphi} \otimes \ket{\varphi} \\
\Updownarrow \\
U \ket{\psi s} = \ket{\psi \psi} \\
U \ket{\varphi s}  = \ket{\varphi \varphi}\\
\\
}
$$

If we take the inner product of these two equation we get 

$$

\displaylines{

\Braket{ \varphi s | U^{-1} U | \psi s } = \braket{ \varphi\varphi | \psi \psi }\\ 
\braket{ \varphi s | \psi s } = \braket{ \varphi | \psi } \braket{ \varphi | \psi }\\
\braket{ \varphi | \psi } \cancelto{ 1 }{ \braket{ s | s }  } = \braket{ \varphi | \psi } \braket{ \varphi | \psi } 
\\
\Downarrow \\
\braket{ \psi|\varphi } = \big( \braket{ \psi | \varphi }  \big) ^{2}
}
$$

Since $x = x^{2}$ is satisfied only for $x=0$ and $x= 1$ we must have either $\ket{\psi} = \ket{\varphi}$ or $\ket{\psi} \perp \ket{\varphi}$. This shows that the device **can only clone states that are orthogonal to each other**.

Even though this proof holds only for unitary operators, it can be shown that the results remain valid for the general case as well.

# Teleportation

# Superdense coding

